var test = require('tape');
var animation = require('../iwritecode');

test('iwritecode animation', {skip: true}, function (t) {

  t.plan(4);

  // constructor should accept 2 parameters: text sentence and interval time
  t.throws(animation());
  t.doesNotThrow(animation('my text ', 100));

  // instance should expose a method to start animation
  var anim1 = animation();
  t.ok(!!anim1.start);
    // it should return a promise
  //t.ok(anim1.start() instanceof Promise);
    // the promise should be called each interval and should return a part of the sentence
    // when the sentence is completed the promise should be closed

  t.end();
});
