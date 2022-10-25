const { verify } = require("jsonwebtoken");

const validateToken = (req, res, next) => {
  //passing the jwt access token to header which is not safe but fine for begineer XSS vulnerable in actuall sight.
  const accessToken = req.header("accessToken");

  if (!accessToken) return res.json({ error: "User not logged in!" });

  try {
    const validToken = verify(accessToken, "importantsecret");
    req.user = validToken;

    if (validToken) {
      return next();
    }
  } catch (err) {
    return res.json({ error: err });
  }
};

module.exports = { validateToken };
