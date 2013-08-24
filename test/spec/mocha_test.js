/*global describe, it */
'use strict';
(function () {
  describe('Give it some context', function () {
    describe('maybe a bit more context here', function () {
      it('fails', function () {
        expect(1+1).to.equal(3);
      });
      it('should run here few assertions', function () {
        expect(1+1).to.equal(2);
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
        expect(a + b).to.equal(2);
        done();
      }, 500);
    });
    it('fails' , function(done) {
      setTimeout(function() {
        expect(a + b).to.equal(3);
        done();
      }, 500);
    });
  });
})();
