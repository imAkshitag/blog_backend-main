const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const User = require('./User');

const Blog = sequelize.define('Blog', {
  title: DataTypes.STRING,
  content: DataTypes.TEXT,
});

User.hasMany(Blog);
Blog.belongsTo(User);

module.exports = Blog;
