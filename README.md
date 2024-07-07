# Blogify.

**Blogify** is a modern, full-stack blog application that allows users to create, read, update, and delete blog posts. It features a sleek, responsive design powered by **ReactJS** and **TailwindCSS** on the frontend, and a robust, secure backend built with **NodeJS** and **Express**.

## Features

- User Authentication (Login/Register)
- Create, Read, Update, Delete blog posts
- Rich Text Editor for post creation and editing
- Responsive design for all devices

## Technologies Used

### Frontend

- **ReactJS**: A JavaScript library for building user interfaces.
- **TailwindCSS**: A utility-first CSS framework for rapidly building custom designs.
- **react-quill**: A React component wrapping Quill, a powerful rich text editor.
- **axios**: Promise based HTTP client for the browser and node.js.
- **date-fns**: Modern JavaScript date utility library.
- **react-icons**: Utilize ES6 imports to include icons from popular icon sets.

### Backend

- **NodeJS**: JavaScript runtime built on Chrome's V8 JavaScript engine.
- **Express**: Fast, unopinionated, minimalist web framework for Node.js.
- **MongoDB (Mongoose)**: MongoDB object modeling tool designed to work in an asynchronous environment.
- **bcryptjs**: Library for hashing and salting user passwords.
- **cookie-parser**: Parse Cookie header and populate `req.cookies` with an object keyed by the cookie names.
- **cors**: Package for providing a Connect/Express middleware that can be used to enable CORS.
- **dotenv**: Loads environment variables from a `.env` file into `process.env`.
- **express-validator**: A library that provides validator and sanitizer functions.
- **jsonwebtoken**: Implementation of JSON Web Tokens.

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

- Node.js
- npm

  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repository

   ```sh
   git clone https://github.com/Kinshu-Learner/Blogify.git
   ```

2. Install NPM packages for both frontend and backend

   **Backend**

   ```sh
   cd backend
   npm install
   ```

   **Frontend**

   ```sh
   cd ../frontend
   npm install
   ```

3. Set up your environment variables in the backend and frontend

   Backend:

   ```env
   MONGODB_CONNECTION_URL = your_mongodb_uri
   JWT_SECRET = your_jwt_secret_key
   ```

   Frontend:

   ```
   REACT_APP_API_BASE_URL = http://localhost:7000
   ```

4. Run the backend server

   ```sh
   npm run dev
   ```

5. Run the frontend application

   ```sh
   # Open a new terminal tab/window
   cd frontend
   npm start
   ```

Your application should now be running on `http://localhost:3000`.

## Usage

After logging in, users can create a new blog post by navigating to the "Create New Post" page. Users can edit or delete their posts after opening them. Readers can view all posts on the homepage and individual post details by clicking on a post.

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

## License

meal-searcher is released under the [MIT License](LICENSE), granting you the freedom to use, modify, and distribute the software.
