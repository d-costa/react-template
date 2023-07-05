# create-react-app-template

## Usage

- Replace all occurrences of `create-react-app-template` with your project name

### Github Actions

#### Dependency review

- Triggered on pull requests
- Enforces dependency reviews on pull requests in your repository.
- Scans for vulnerable versions of dependencies introduced through package version changes in pull requests.

> The action is available for all public repositories, as well as private repositories that have GitHub Advanced Security enabled. [Source](https://docs.github.com/en/code-security/supply-chain-security/understanding-your-software-supply-chain/about-dependency-review#dependency-review-enforcement)

#### Deploy

- Triggered on pushes to master
- Builds, deploys, and pushes to the `gh-pages` branch

#### Test

- Triggered on pushes or pull requests to master
- Builds and tests the project

#### Preview

- Triggered on pull requests
- Builds and deploys the project to subfolder in the `gh-pages` branch
- Only triggered if some files were changed (e.g. **.jsx, **.tsx, etc)

## Available Scripts

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
