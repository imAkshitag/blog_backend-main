const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Blog = require('./Blog');
const User = require('./User');

const Comment = sequelize.define('Comment', {
  content: DataTypes.TEXT,
});

User.hasMany(Comment);
Comment.belongsTo(User);
Blog.hasMany(Comment);
Comment.belongsTo(Blog);

module.exports = Comment;
