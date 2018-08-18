MERN Comments-Box
============

The project was realized using React.js as a client framework, Node.js as a web server, Express.js to implement a simple HTTP API and finally a MongoDB database to store and fetch data from the client 

## Prerequisites

- [NPM](https://www.npmjs.com/get-npm)
- [MongoDB Community Edition ^4](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/#install-mongodb-community-edition) 
- [NodeJS ^8](https://nodejs.org/en/download/)

## Getting Started

- Clone the repository

```
https://github.com/AmirBuchvalter/MERNCommentsBox.git
```

- Run npm install under the root of the cloned repository
```
npm install
```
- Run npm install for the server directory:
```
npm install --prefix ./server
```
- Open the package.json file under the repository root. Under "scripts"->"dev", add a local MongoDB data folder, for example:
```
mongod --dbpath /Users/someuser/Documents/mongodb-data
```

## Running the App Locally

- Navigate to the "mern-comments-box" directory and run:
 ```
 npm run dev
 ```