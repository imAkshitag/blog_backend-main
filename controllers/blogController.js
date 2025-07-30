const Blog = require('../models/Blog');

exports.createBlog = async (req, res) => {
  const { title, content } = req.body;
  const blog = await Blog.create({ title, content, UserId: req.userId });
  res.json(blog);
};

exports.getBlogs = async (req, res) => {
  const blogs = await Blog.findAll();
  res.json(blogs);
};

exports.updateBlog = async (req, res) => {
  const blog = await Blog.findByPk(req.params.id);
  if (blog.UserId !== req.userId) return res.sendStatus(403);
  await blog.update(req.body);
  res.json(blog);
};

exports.deleteBlog = async (req, res) => {
  const blog = await Blog.findByPk(req.params.id);
  if (blog.UserId !== req.userId) return res.sendStatus(403);
  await blog.destroy();
  res.sendStatus(204);
};
