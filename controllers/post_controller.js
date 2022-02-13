let Post = require("../models/post");
let Comment = require("../models/comment");

exports.get_all_posts = (req, res, next) => {
  Post.find({ published: true })
    .populate("comments")
    .exec((err, posts) => {
      res.json({ posts });
    });
};

exports.get_post_by_id = (req, res, next) => {
  Post.findOne({ _id: req.params.id })
    .populate("comments")
    .exec((err, post) => {
      res.json({ post });
    });
};

exports.create_new_post = (req, res, next) => {
  Post.create({
    title: req.body.title,
    content: req.body.content,
    published: req.body.published,
  });
  res.json({ message: "Post created" });
};

exports.update_post = (req, res, next) => {
  Post.findOneAndUpdate(
    { _id: "6209823823a0134b7bda489c" },
    req.body,
    {},
    (err, post) => {
      res.json({ updateBody: req.body, message: "update complete" });
    }
  );
};
