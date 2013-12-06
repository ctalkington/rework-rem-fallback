/**
 * rework-rem-fallback
 *
 * Copyright (c) 2013 Chris Talkington, contributors.
 * Licensed under the MIT license.
 * https://github.com/ctalkington/rework-rem-fallback/blob/master/LICENSE-MIT
 */
var visit = require('rework-visit');

function remToPx(val, base) {
  base = typeof base === 'number' ? base : 16;

  return val.replace(/([+-]?\d*\.?\d+)\s*rem/g, function(a, b, c) {
    var rem = parseFloat(b);
    var px = Math.round(rem * base);

    return px + 'px';
  });
}

module.exports = function(base) {
  return function(style, rework) {
    visit(style, function(declarations, node) {
      for (var i = 0; i < declarations.length; ++i) {
        var decl = declarations[i];

        if ('comment' === decl.type) continue;
        if (!~decl.value.indexOf('rem')) continue;

        declarations.splice(i++, 0, {
          type: 'declaration',
          property: decl.property,
          value: remToPx(decl.value, base)
        });
      }
    });
  };
};