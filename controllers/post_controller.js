let Post = require("../models/post");
let Comment = require("../models/comment");
let async = require("async");

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

exports.create_post = (req, res, next) => {
  Post.create({
    title: req.body.title,
    content: req.body.content,
    published: req.body.published,
  });
  res.json({ message: "Post created" });
};

exports.create_comment = async (req, res, next) => {
  const newComment = await Comment.create({
    content: req.body.comment,
  });

  Post.findOneAndUpdate(
    { _id: req.params.id },
    { $push: { comments: newComment._id } },
    {},
    (err, post) => {
      res.json({ message: "comment created" });
    }
  );
};

exports.update_post = (req, res, next) => {
  Post.findOneAndUpdate({ _id: req.params.id }, req.body, {}, (err, post) => {
    res.json({ Message: "Post Updated" });
  });
};
