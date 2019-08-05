const express = require('express');
const app = express();
const bodyParser = require("body-parser");
 
var routes = require('./router');
 
app.use(express.urlencoded({extended: false}));
app.use(express.json());
//var emaillistener = require('./api/services/mail.listerner');
app.use(bodyParser.json());
 
 
const logRequestStart = (req, res, next) => {
  console.info(`${req.method} ${req.originalUrl}`) 

  res.on('finish', () => {
      console.info(`${res.statusCode} ${res.statusMessage}; ${res.get('Content-Length') || 0}b sent`)
  })
  
  next()
}

app.use(logRequestStart)
 
routes.register(app);

app.listen(8074, () => {
   
  console.log('Server running on localhost:8074');
});

module.exports = app;