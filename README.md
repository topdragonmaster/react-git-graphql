# Assessment

GraphQL API challenge to build react app.

## Functionalities

- Search users and repositories
- View user info

## Screenshot
![Screenshot](screenshot.gif)

## Technologies & Tools

- React
- TailwindCSS
- GraphQL
- GraphQL Codegen
- Tanstack React Query

## How to run

- Install node modules: `yarn install`
- Replace github api key in the src/config with your own access key
- Start the project: `yarn start`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Project structure

```
src
├── components
│   ├── CategoryList         # CategoryList Components
│   ├── UserListItem         # UserListItem Component
│   └── SearchBar            # SearchBar Component
│
├── config                   # Define config variables
├── graphql                  # Define queries and built-in queries
├── hooks                    # Define hooks
├── pages
│   ├── Search               # Search Page
│   └── User                 # User Page
└── routes                   # Define routes
└── test-utils               # Define test-utils
```
## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
