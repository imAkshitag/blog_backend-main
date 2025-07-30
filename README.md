# Blog Backend

This is the backend for a simple blog application. It provides APIs for user authentication, creating, reading, updating, and deleting blog posts, and managing comments.

## Features

*   User registration and login
*   JWT-based authentication
*   CRUD operations for blog posts
*   Add and view comments on blog posts

## Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/your-username/blog-backend.git
    ```
2.  Install the dependencies:
    ```bash
    npm install
    ```
3.  Create a `.env` file in the root directory and add the following environment variables:
    ```
    PORT=3000
    MONGODB_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret
    ```

## Usage

1.  Start the server:
    ```bash
    npm start
    ```
2.  The server will be running on `http://localhost:3000`.

## API Endpoints

### Authentication

*   `POST /api/auth/register`: Register a new user.
*   `POST /api/auth/login`: Login a user and get a JWT token.

### Blog Posts

*   `GET /api/blogs`: Get all blog posts.
*   `GET /api/blogs/:id`: Get a single blog post by ID.
*   `POST /api/blogs`: Create a new blog post (requires authentication).
*   `PUT /api/blogs/:id`: Update a blog post (requires authentication).
*   `DELETE /api/blogs/:id`: Delete a blog post (requires authentication).

### Comments

*   `POST /api/comments/:blogId`: Add a comment to a blog post.
*   `GET /api/comments/:blogId`: Get all comments for a blog post.

## Technologies Used

*   Node.js
*   Express.js
*   MongoDB
*   Mongoose
*   JSON Web Token (JWT)

## Folder Structure

```
.
├── config
│   └── db.js
├── controllers
│   ├── authController.js
│   ├── blogController.js
│   └── commentController.js
├── middleware
│   └── auth.js
├── models
│   ├── Blog.js
│   ├── Comment.js
│   └── User.js
├── routes
│   ├── auth.js
│   ├── blog.js
│   └── comment.js
├── .env
├── app.js
├── package.json
└── README.md
```
