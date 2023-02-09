#!/usr/bin/node

const request = require('request');

request('https://swapi-api.alx-tools.com/api/films/:id' + process.argv[2], function (error, response, body) {
  if (error) {
    console.error(error);
  }
  console.log(JSON.parse(body).title);
});
