# rework-rem-fallback [![Build Status](https://travis-ci.org/ctalkington/rework-rem-fallback.png?branch=master)](https://travis-ci.org/ctalkington/rework-rem-fallback)

A [Rework](https://github.com/visionmedia/rework) plugin to add pixel fallback for properties using rem units.
This is a build time workaround for browsers that don't understand the rem unit. (cough IE<9)

## Installation

```
npm install rework-rem-fallback
```

## Use

As a Rework plugin:

```js
// dependencies
var fs = require('fs');
var rework = require('rework');
var remFallback = require('rework-rem-fallback');

// css to be processed
var css = fs.readFileSync('build/build.css', 'utf8').toString();

// process css using rework-rem-fallback (default base 16px)
var out = rework(css).use(remFallback()).toString();

// process css using rework-rem-fallback (custom base 14px)
var out14 = rework(css).use(remFallback(14)).toString();
```

## Output

```css
.main-header {
  width: 5rem;
}
```

yields:

```css
.main-header {
  width: 80px;
  width: 5rem;
}
```

## License

[MIT License](https://github.com/ctalkington/rework-rem-fallback/blob/master/LICENSE-MIT)