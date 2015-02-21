(function() {
  'use strict';
  /* jshint esnext:true */

  var pg = require('./server-pg');
  var jwt = require('./server-jwt');
  var cors = require('./server-cors');

  var koa = require('koa');
  var app = koa();

  var PORT = process.env.PORT || 3333;

  app.use(pg);
  app.use(jwt);
  app.use(cors);

  app.listen(PORT);

}());
