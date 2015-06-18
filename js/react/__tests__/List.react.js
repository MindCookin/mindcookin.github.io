var list = require('../List.react');

test('list of things I love', function (t) {

  t.plan(4);
  // It should be a factory of lists
    t.ok(list);
    // each list should be unique
    if (!!list.create) {
      var list1 = list.create('hello', ['asd', 'pok']);
      var list2 = list.create('goodbye', ['asd', 'pok']);
      t.ok(list1 !== list2);
    }

  // Lists
    // list should require a list of strings
    if (list1) {
      t.throw(list.create('title'));
    }
    // list should require a title
    if (list1) {
      t.throw(list.create(['one', 'two']));
    }
});
