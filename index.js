'use strict';

const server = require('./src/server')


// Start up DB Server
const { db } = require('./src/auth/models/index.js');
db.sync()
  .then(() => {

    // Start the web server
    server.startup(process.env.PORT);
  });
