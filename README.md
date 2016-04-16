# HTMLLint

[![NPM version](https://img.shields.io/npm/v/html-minifier-lint.svg)](https://www.npmjs.com/package/html-minifier-lint)
[![Build Status](https://img.shields.io/travis/kangax/html-lint.svg)](https://travis-ci.org/kangax/html-lint)
[![Dependency Status](https://img.shields.io/david/kangax/html-lint.svg)](https://david-dm.org/kangax/html-lint)
[![devDependency Status](https://img.shields.io/david/dev/kangax/html-lint.svg)](https://david-dm.org/kangax/html-lint#info=devDependencies)
[![Gitter](https://img.shields.io/gitter/room/kangax/html-minifier.svg)](https://gitter.im/kangax/html-minifier)

[HTMLLint](http://kangax.github.io/html-lint/) is a JavaScript-based HTML Linter based on [HTMLMinifier](https://github.com/kangax/html-minifier).

[Test suite is available online](http://kangax.github.io/html-lint/tests/).

## Installation Instructions

From NPM for programmatic use:

```shell
npm install html-minifier-lint
```

From Git:

```shell
git clone git://github.com/kangax/html-lint.git
cd html-lint
npm link .
```

## Usage

### Node.js

```js
var lint = require('html-minifier-lint').lint;
var result = lint('<p title="blah" id="moo">foo</p>');
result; // ' - No DOCTYPE found.'
```
