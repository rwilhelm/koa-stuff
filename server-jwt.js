(function() {
  'use strict';
  /* jshint esnext:true */

  var koa = require('koa');
  var jwt = require('koa-jwt');
  var app = koa();

  var PORT = process.env.PORT || 3333;
  var SECRET = '2d069bb55e5aaf09bd11012a2c0d8025';

  // handle authentication failure
  app.use(function*(next) {
    try {
      yield next; // -> jwt authorization
    } catch (err) {
      if (401 === err.status) {
        this.status = 401; // authentication is possible but has failed
        this.body = 'Error: Protected resource. No Authorization header found.\n';
      } else {
        throw err;
      }
    }
  });

  // routes below the next loc are only accessible to authenticated clients.
  // if the authorization succeeds, next is yielded and the following routes
  // are reached. if it fails, it throws and the previous middleware will catch
  // that error and send back status 401.

  app.use(jwt({secret: SECRET})); // <-- decrypts
  app.listen(PORT);

}());
