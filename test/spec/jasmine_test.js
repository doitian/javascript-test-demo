/*global describe, it */
'use strict';
(function () {
  describe('Give it some context', function () {
    describe('maybe a bit more context here', function () {
      it('fails', function () {
        expect(1+1).toEqual(3);
      });
      it('should run here few assertions', function () {
        expect(1+1).toEqual(2);
      });
    });
  });
  describe('Async Test', function () {
    var a, b;
    beforeEach(function(done) {
      setTimeout(function() {
        a = 1;
        b = 1;
        done();
      }, 500);
    });
    it('passes' , function(done) {
      setTimeout(function() {
        expect(a + b).toEqual(2);
        done();
      }, 500);
    });
    it('fails' , function(done) {
      setTimeout(function() {
        expect(a + b).toEqual(3);
        done();
      }, 500);
    });
  });
  // 1.3 way
  // describe('Async Test', function () {
  //   var a, b;
  //   beforeEach(function() {
  //     var done = false;
  //     runs(function() {
  //       setTimeout(function() {
  //         a = 1;
  //         b = 1;
  //         done = true;
  //       }, 500);
  //     });
  //     waitsFor(function() { return done; });
  //   });
  //   it('passes' , function(done) {
  //     var done = true;
  //     var result = null;

  //     runs(function() {
  //       setTimeout(function() {
  //         result = a + b;
  //         done = true;
  //       }, 500);
  //     });
  //     waitsFor(function() { return done; });

  //     runs(function() {
  //       expect(result).toEqual(2);
  //     });
  //   });
  // });
})();
