(function() {
  //jshint esnext:true
  'use strict';

  var koa = require('koa');
  var pg = require('koa-pg');
  var app = koa();

  var DATABASE = process.env.DATABASE_URL || 'postgres://asdf@localhost/koa-pg-test';
  var PORT = process.env.PORT || 3333;

  app.use(function *(next) {
    try {
      yield next;
      this.status = 200;
    } catch (err) {
      this.status = 503;
      throw new Error('DB FAILURE');
    }
  });

  app.use(pg(DATABASE));
  app.listen(PORT);

}());
