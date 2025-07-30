const Comment = require('../models/Comment');

exports.addComment = async (req, res) => {
  const { blogId, content } = req.body;
  const comment = await Comment.create({
    content,
    BlogId: blogId,
    UserId: req.userId,
  });
  res.json(comment);
};

exports.getComments = async (req, res) => {
  const comments = await Comment.findAll({
    where: { BlogId: req.params.blogId },
  });
  res.json(comments);
};
