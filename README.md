# react-native-rtkq-testing-with-msw
This repository illustrates how to use [Mock Service Worker](https://mswjs.io/) to mock a REST API handled with [RTK Query](https://redux-toolkit.js.org/rtk-query/overview) in [React Native](https://reactnative.dev/) project for unit and integration tests that run in Node.

Note that since React Native does not execute in a browser environment, you cannot run a Service Worker alongside your application. You can use msw with React Native only for NodeJS integration.

## Prerequisites
- [yarn](https://yarnpkg.com/) or [npm](https://www.npmjs.com/),
- [node.js](https://nodejs.org/),
- [React Native CLI](https://reactnative.dev/docs/environment-setup) environment

## How to run

These instructions will get you a copy of the project up and running on your local machine.

1. Clone this repo into your local machine:
- with https  
   `git clone https://github.com/JBudny/react-native-rtkq-testing-with-msw.git`,  
- with ssh  
   `git clone git@github.com:JBudny/react-native-rtkq-testing-with-msw.git`,  
- or with GitHub CLI  
   `gh repo clone JBudny/react-native-rtkq-testing-with-msw`
2. Install dependencies
- with npm  
   `npm install`
- or with yarn  
   `yarn install`
3. Create env file under the root directory of the project ([see example](#env-file-example)):  
   `.env`
4. Start or plug your virtual or physical device
5. Start React Native  
   `yarn start`
6. Start App  
   `yarn android`

### .env file example:

```
API_BASE_URL=https://random-data-api.com/api
```