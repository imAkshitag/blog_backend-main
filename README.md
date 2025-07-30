# Blog Backend

This is the backend for a simple blog application. It provides a RESTful API for user authentication, creating, reading, updating, and deleting blog posts, and managing comments.

## Features

*   **User Authentication:** Secure user registration and login using JWT (JSON Web Tokens).
*   **Blog Post Management:** Full CRUD (Create, Read, Update, Delete) functionality for blog posts.
*   **Commenting System:** Users can add and view comments on blog posts.
*   **Relational Database:** Utilizes MySQL for robust data storage.

## Prerequisites

*   [Node.js](https://nodejs.org/) (v14 or later)
*   [NPM](https://www.npmjs.com/)
*   [MySQL](https://www.mysql.com/)

## Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/blog-backend.git
    cd blog-backend
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Set up the database:**
    *   Log in to your MySQL server and create a new database for the project.
    *   e.g., `CREATE DATABASE blog_db;`

4.  **Configure environment variables:**
    Create a `.env` file in the root directory and add the following configuration.

    ```
    PORT=3000

    # MySQL Database
    DB_HOST=localhost
    DB_USER=your_mysql_username
    DB_PASSWORD=your_mysql_password
    DB_NAME=blog_db

    # JWT
    JWT_SECRET=your_super_secret_jwt_key
    ```

## Usage

1.  **Start the server:**
    ```bash
    npm start
    ```

2.  The server will be running at `http://localhost:3000`.

## API Endpoints

All endpoints are prefixed with `/api`.

### Authentication

#### `POST /auth/register`

Register a new user.

*   **Request Body:**
    ```json
    {
      "username": "testuser",
      "email": "test@example.com",
      "password": "password123"
    }
    ```
*   **Response (201 Created):**
    ```json
    {
      "message": "User registered successfully"
    }
    ```

#### `POST /auth/login`

Login a user and get a JWT token.

*   **Request Body:**
    ```json
    {
      "email": "test@example.com",
      "password": "password123"
    }
    ```
*   **Response (200 OK):**
    ```json
    {
      "token": "your_jwt_token"
    }
    ```

### Blog Posts

#### `GET /blogs`

Get all blog posts.

*   **Response (200 OK):**
    ```json
    [
      {
        "id": 1,
        "title": "First Post",
        "content": "This is the first blog post.",
        "authorId": 1,
        "createdAt": "2025-07-30T12:00:00.000Z",
        "updatedAt": "2025-07-30T12:00:00.000Z"
      }
    ]
    ```

#### `GET /blogs/:id`

Get a single blog post by ID.

*   **Response (200 OK):**
    ```json
    {
      "id": 1,
      "title": "First Post",
      "content": "This is the first blog post.",
      "authorId": 1,
      "createdAt": "2025-07-30T12:00:00.000Z",
      "updatedAt": "2025-07-30T12:00:00.000Z",
      "Comments": [
        {
          "id": 1,
          "text": "Great post!",
          "authorId": 2,
          "createdAt": "2025-07-30T13:00:00.000Z"
        }
      ]
    }
    ```

#### `POST /blogs`

Create a new blog post.

*   **Headers:** `Authorization: Bearer your_jwt_token`
*   **Request Body:**
    ```json
    {
      "title": "New Blog Post",
      "content": "Content of the new post."
    }
    ```
*   **Response (201 Created):**
    ```json
    {
      "id": 2,
      "title": "New Blog Post",
      "content": "Content of the new post.",
      "authorId": 1,
      "updatedAt": "2025-07-30T14:00:00.000Z",
      "createdAt": "2025-07-30T14:00:00.000Z"
    }
    ```

#### `PUT /blogs/:id`

Update a blog post.

*   **Headers:** `Authorization: Bearer your_jwt_token`
*   **Request Body:**
    ```json
    {
      "title": "Updated Title",
      "content": "Updated content."
    }
    ```
*   **Response (200 OK):**
    ```json
    {
      "message": "Blog post updated successfully"
    }
    ```

#### `DELETE /blogs/:id`

Delete a blog post.

*   **Headers:** `Authorization: Bearer your_jwt_token`
*   **Response (200 OK):**
    ```json
    {
      "message": "Blog post deleted successfully"
    }
    ```

### Comments

#### `POST /comments/:blogId`

Add a comment to a blog post.

*   **Headers:** `Authorization: Bearer your_jwt_token`
*   **Request Body:**
    ```json
    {
      "text": "This is a new comment."
    }
    ```
*   **Response (201 Created):**
    ```json
    {
      "id": 2,
      "text": "This is a new comment.",
      "authorId": 1,
      "blogId": 1,
      "updatedAt": "2025-07-30T15:00:00.000Z",
      "createdAt": "2025-07-30T15:00:00.000Z"
    }
    ```

#### `GET /comments/:blogId`

Get all comments for a blog post.

*   **Response (200 OK):**
    ```json
    [
        {
          "id": 1,
          "text": "Great post!",
          "authorId": 2,
          "createdAt": "2025-07-30T13:00:00.000Z"
        }
    ]
    ```

## Database Schema

### Users

| Field      | Type         | Constraints     | Description               |
|------------|--------------|-----------------|---------------------------|
| `id`       | INT          | PRIMARY KEY, AI | Unique identifier for user|
| `username` | VARCHAR(255) | NOT NULL, UNIQUE| User's name               |
| `email`    | VARCHAR(255) | NOT NULL, UNIQUE| User's email address      |
| `password` | VARCHAR(255) | NOT NULL        | Hashed user password      |

### Blogs

| Field      | Type         | Constraints     | Description                |
|------------|--------------|-----------------|----------------------------|
| `id`       | INT          | PRIMARY KEY, AI | Unique identifier for blog |
| `title`    | VARCHAR(255) | NOT NULL        | Title of the blog post     |
| `content`  | TEXT         | NOT NULL        | Content of the blog post   |
| `authorId` | INT          | FOREIGN KEY     | References `Users(id)`     |

### Comments

| Field      | Type         | Constraints     | Description                   |
|------------|--------------|-----------------|-------------------------------|
| `id`       | INT          | PRIMARY KEY, AI | Unique identifier for comment |
| `text`     | TEXT         | NOT NULL        | Content of the comment        |
| `authorId` | INT          | FOREIGN KEY     | References `Users(id)`        |
| `blogId`   | INT          | FOREIGN KEY     | References `Blogs(id)`        |


## Technologies Used

*   **Backend:** Node.js, Express.js
*   **Database:** MySQL
*   **ORM:** Sequelize (or other if you prefer)
*   **Authentication:** JSON Web Token (JWT)

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
