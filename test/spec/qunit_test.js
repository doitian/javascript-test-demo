/*global describe, it */
'use strict';
(function () {
  module('Give it some context');
  test('fails', function () {
    equal(1+1, 3, "1 + 1 = 3");
  });
  test('should run here few assertions', function () {
    equal(1+1, 2, "1 + 1 = 2");
  });

  var a, b;
  module('Async Test', {
    setup: function() {
      stop();
      setTimeout(function() {
        a = 1
        b = 1
        start();
      }, 500);
    }
  });

  asyncTest('passes' , function() {
    expect(1);
    setTimeout(function() {
      equal(a + b, 2);
      start();
    }, 500);
  });

  asyncTest('fails' , function(done) {
    expect(1);
    setTimeout(function() {
      equal(a + b, 3);
      start();
    }, 500);
  });
})();
