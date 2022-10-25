const express = require("express");
const cors = require("cors");
const db = require("./models");
const postRouter = require("./routes/Posts"); //postRouter this is created here
const commentsRouter = require("./routes/Comments");
const usersRouter = require("./routes/Users");
const likesRouter = require("./routes/Likes");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());
//Router
app.use("/posts", postRouter);
app.use("/comments", commentsRouter);
app.use("/auth", usersRouter);
app.use("/likes", likesRouter);

db.sequelize
  .sync()
  .then(() => {
    app.listen(process.env.PORT || 3001, () => {
      console.log("The server is running on 3001");
    });
  })
  .catch((err) => {
    console.log(err);
  });
