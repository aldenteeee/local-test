const functions = require('firebase-functions');
const express = require('express');
const basicAuth = require('basic-auth-connect');
const path = require('path');

const app = express();
app.all('/*', basicAuth(function(user, password) {
  return user === '' && password === '';
}));
app.use(express.static('./src/'));

exports.app = functions.https.onRequest(app);

//test8
