(function() {
  'use strict';
  /* jshint esnext:true */

  var koa = require('koa');
  var app = koa();

  var PORT = process.env.PORT || 3333;

  app.listen(PORT);

}());
