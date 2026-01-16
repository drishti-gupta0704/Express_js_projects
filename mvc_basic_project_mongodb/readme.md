
# MVC Basic Project with Express.js & MongoDB

A simple CRUD project using Express.js, MongoDB, and the MVC architecture. This project demonstrates how to structure a backend application with routes, controllers, and models while performing full CRUD operations on users.

## Features
- MVC Architecture – Clean separation of routes,controllers and models
- CRUD Operations – Create, Read, Update, Delete users
- MongoDB Integration – Using Mongoose
- Middleware – JSON body parsing and basic validation
- RESTful API Endpoints – Easy to extend

## Project Structure
mvc_basic_project_mongodb/
│
├── app.js                 # Entry point
├── config/
│   └── db.js              # MongoDB connection
├── controllers/
│   └── userController.js  # Handles user logic
├── models/
│   └── userModel.js       # User schema
├── routes/
│   └── userRoutes.js      # User routes
├── .env                   # Environment variables
├── package.json
├── README.md              # Project documentation
└── node_modules/

## how to run 
1. Clone the repository
   git clone https://github.com/drishti-gupta0704/Express_js_projects.git
   cd mvc_basic_project_mongodb

2. Install dependencies
   npm install

3. Create a .env file in the root folder:
   PORT=3000
   MONGO_URI=mongodb://127.0.0.1:27017/mvc_basic_project_mongodb

4. Start the server
   node app.js