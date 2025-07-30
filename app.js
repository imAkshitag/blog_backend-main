const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sequelize = require('./config/db');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/blogs', require('./routes/blog'));
app.use('/api/comments', require('./routes/comment'));

sequelize.sync().then(() => {
  app.listen(process.env.PORT, () => {
    console.log('Server started on port', process.env.PORT);
  });
});
