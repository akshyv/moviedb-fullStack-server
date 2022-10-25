const express = require("express");
const router = express.Router();
const { Posts, Likes } = require("../models");
const { validateToken } = require("../middlewares/AuthMiddleware");

router.get("/", validateToken, async (req, res) => {
  const listOfPosts = await Posts.findAll({ include: [Likes] });

  const likedPosts = await Likes.findAll({ where: { UserId: req.user.id } });
  res.json({ listOfPosts, likedPosts });
});

router.get("/byId/:id", async (req, res) => {
  const id = req.params.id;
  const post = await Posts.findByPk(id);
  res.json(post);
});

router.post("/", async (req, res) => {
  // router.post("/", validateToken, async (req, res) => {
  const post = req.body;
  // post.username = req.user.username
  await Posts.create(post);
  res.json(post);
});

router.delete("/:PostId", validateToken, async (req, res) => {
  const postId = req.params.PostId;
  await Posts.destroy({
    where: {
      id: postId,
    },
  });
  res.json("DELETED successfully");
});

module.exports = router;
//prod eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkFrc2h5IiwiaWQiOjQsImlhdCI6MTY2NjQ5ODQxMH0.6Fw3Xtu8HF1-VegCghSVNUF62-3Fvw8_s80V1v0sc88
// dev eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkFrc2h5IiwiaWQiOjQsImlhdCI6MTY2NjQ5ODkyNX0.5LMbp34U5TtlizqMzLmX0rI6A2Xe5SL-jxZ8evb9taQ
