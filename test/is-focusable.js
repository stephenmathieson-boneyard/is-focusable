
describe('is-focusable', function () {
  var is = require('is-focusable');
  var assert = require('assert');
  var descendants = require('descendants');
  var fixture = document.getElementById('fixture');

  it('should check tabindex', function () {
    var no = fixture.querySelector('a.no[tabindex="lol"]');
    assert(is(no) === false);
    var yes = [
      fixture.querySelector('a[tabindex]'), // first one
      fixture.querySelector('input[tabindex]'),
      fixture.querySelector('select[tabindex]'),
      fixture.querySelector('div[tabindex]')
    ];
    for (var i = yes.length - 1; i >= 0; i--) {
      assert(is(yes[i]) === true);
    }
  });

  it('should check element type', function () {
    var button = fixture.querySelector('button');
    var input = fixture.querySelector('input');
    var select = fixture.querySelector('select');
    var textarea = fixture.querySelector('textarea');
    var div = fixture.querySelector('div');
    assert(is(button) === true);
    assert(is(input) === true);
    assert(is(select) === true);
    assert(is(textarea) === true);
    assert(is(div) === false);
  });

  it('should force anchors to have href', function () {
    var a = fixture.querySelector('a.no');
    assert(is(a) === false);
  });

  it('should work', function () {
    var elements = descendants(fixture, true);
    for (var i = elements.length - 1; i >= 0; i--) {
      var expected = !~elements[i].className.indexOf('no');
      assert(is(elements[i]) === expected);
    }
  });

});
