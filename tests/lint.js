 /* global lint, HTMLLint */
'use strict';

if (typeof lint === 'undefined') {
  self.lint = require('html-minifier-lint').lint;
}
if (typeof HTMLLint === 'undefined') {
  self.HTMLLint = require('html-minifier-lint').HTMLLint;
}

QUnit.test('lint exists', function(assert) {
  assert.ok(lint);
  assert.ok(HTMLLint);
});

QUnit.test('lint is instance of HTMLLint', function(assert) {
  var lint = new HTMLLint();
  assert.ok(lint instanceof HTMLLint);
});

QUnit.test('lint API', function(assert) {
  var lint = new HTMLLint();
  assert.equal(0, lint.log.length, '`log` property exists');
  assert.equal('function', typeof lint.populate, '`populate` method exists');
  assert.equal('function', typeof lint.test, '`test` method exists');
  assert.equal('function', typeof lint.testElement, '`testElement` method exists');
  assert.equal('function', typeof lint.testAttribute, '`testAttribute` method exists');
});

function process(assert, input) {
  var element = {};
  lint(input, element);
  var log = element.innerHTML || '';
  return function(str, count) {
    var index = -str.length;
    var n = 0;
    do {
      index = log.indexOf(str, index + str.length);
    } while (index !== -1 && ++n);
    assert.equal(n, count);
  };
}

QUnit.test('deprecated attribute', function(assert) {
  var match = process(assert, '<script language="javascript">foo();</script>');
  match('script', 1);
  match('language', 1);
  match('deprecated-attribute', 1);
  match = process(assert, '<script type="text/javascript">foo();</script>');
  match('script', 0);
  match('language', 0);
  match('deprecated-attribute', 0);
});

QUnit.test('deprecated element', function(assert) {
  var match = process(assert, '<font>foo</font>');
  match('font', 1);
  match('deprecated-element', 1);
  match = process(assert, '<span>foo</span>');
  match('span', 0);
  match('deprecated-element', 0);
});

QUnit.test('missing DOCTYPE', function(assert) {
  var match = process(assert, '<html><head><title>foo</title></head><body>bar</body></html>');
  match('DOCTYPE', 1);
  match = process(assert, '<!DOCTYPE html><html><head><title>foo</title></head><body>bar</body></html>');
  match('DOCTYPE', 0);
});

QUnit.test('repeating attribute', function(assert) {
  var match = process(assert, '<a data-foo="bar" href="/" data-foo="baz">click</a>');
  match('data-foo', 1);
  match('repeating-attribute', 1);
  match = process(assert, '<a data-foo="bar" href="/" ng-foo="baz">click</a>');
  match('repeating-attribute', 0);
});

QUnit.test('duplicate errors', function(assert) {
  var match = process(assert, '<font>foo</font>');
  match('DOCTYPE', 1);
  match('font', 1);
  match('deprecated-element', 1);
});
