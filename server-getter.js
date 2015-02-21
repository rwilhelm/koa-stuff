(function() {
  'use strict';
  /* jshint esnext:true */

  var koa = require('koa');
  var app = koa();

  var PORT = process.env.PORT || 3333;

  app.use(function*(next) {

    var a = {
      a: 1
    };

    if (!a.hasOwnProperty('greet')) {
      Object.defineProperty(a, 'greet', {
        get: function() {
          return 'hi there';
        }
      });
    }

    console.log(a.greet);
    this.body = a; // --> it's json now, no greet
    yield next;
  });

  app.listen(PORT);

}());
