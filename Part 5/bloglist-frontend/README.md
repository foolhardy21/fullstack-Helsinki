# [Blog App Frontend](https://fullstackopen.com/en/part5)

## What is it ?
This is the frontend for the blog app mentioned in the above link and is a result of all the exercises solved during the chapter.

### Overview
- User has to login to the account to use its functionalities. Currently, signup option is not provided. 
- User can view it's own blogs added and can udpate them or delete them.
- User can add more blogs using a form.
- User can view other user's saved blogs.

The app structure was initialised using create-react-app. It follows a design pattern of component rendering where each component of the app has its own file.

All the components can be found in components directory. Unit testing is performed for some of the components.

Different state objects and reducers are created for blogs, users and notifications. The store can be found in store.js file in the root directory. Async action creators are used for async operations like sending http requests to the backend.

Apart from unit testing, E2E testing is performed and the file can be found in cypress/integration/ directory.

## Tech Used

- React as UI library.
- React Router as browser routing library. 
- Redux as state management library.
- Redux thunk for async actions.
- Cypress as End to End testing library.
- React testing library as unit testing library.
- Jest as testing framework.
- Axios as HTTP based client.
- ESLint as linting tool.

### Running the application
Before running the frontend, make sure you run the [backend](https://github.com/foolhardy21/fullstack-Helsinki/tree/main/Part%204).

To run this app, install the dependencies using `npm install` and then use the command `npm start`. Refer to package.json for other scripts.
