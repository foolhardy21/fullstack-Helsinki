# [Blog App Backend](https://fullstackopen.com/en/part4)

## What is it ?
This is the backend for the blog app mentioned in the above link and is a result of all the exercises solved during the chapter.

### Overview
It follows a design pattern of routes, controllers and models.
The request is recieved by a particular route and it's respective controller function is used to get data or manipulate data from the database using a model.
The helper functions like middleware or error logging functions are present in the utils directory.

This app can be run in different environments namely - development, production and testing. The environment variables are updated in the config file based on the environment.

Integration tests are added to test the APIs. A test database is used during the process. These tests can be found in tests directory.

User authorization is checked before every critical operartion in database.

User authentication is done using a simple username and password where the password is saved as a hash in database.

## Tech Used

- Express as backend framework.
- MongoDB and mongoose for database interaction.
- supertest for integration testing.
- Jest as testing framework.
- JWT as token based authentication.
- bcrypt for password hash.

### Running the application

To run this app, install the dependencies using `npm install`. Make sure to add you .env file and declare the database URI and Port. Then use the command `npm run dev` to run in dev environment. Refer to package.json for other scripts.

[Frontend can be found here.](https://github.com/foolhardy21/fullstack-Helsinki/tree/main/Part%205/bloglist-frontend)
