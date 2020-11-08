# astro-channel-list
Build React based web application to display all channel provided by Astro

## Architecture
- State management: I'm using RXJS observable, react hooks and observable-hooks for state management.
- View: styled-components were used to beutify the apps.
- Build project: Webpack

I'm using typescript to speed up my development and help me to trace error at code level.

## Run the apps locally
To run it locally, you can clone this repo and do as follow:

npm i
- install all dependencies.

npm start
- Runs the app in the development mode.
  Open http://localhost:8080 to view it in the browser.

npm run build
- Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.
The build is minified and the filenames include the hashes.

## Read more
- Rxjs Observable - https://rxjs-dev.firebaseapp.com/guide/observable
- Observable hooks - https://observable-hooks.js.org/guide/
