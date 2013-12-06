/*global describe, it */
var fs = require('fs');
var rework = require('rework');
var assert = require('chai').assert;
var remFallback = require('..');

function fixture(name){
  return fs.readFileSync('test/fixtures/' + name + '.css', 'utf8').trim().replace(/\r\n/g, '\n');
}

describe('rework-rem-fallback', function(){
  it('should add pixel fallback for properties using rem units', function(){
    var actual = rework(fixture('base')).use(remFallback()).toString().trim();
    var expected = fixture('base-expected');

    assert.equal(actual, expected);
  });

  it('should support the use of a custom pixel base', function(){
    var actual = rework(fixture('custom-base')).use(remFallback(14)).toString().trim();
    var expected = fixture('custom-base-expected');

    assert.equal(actual, expected);
  });
});