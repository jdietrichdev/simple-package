import 'mocha';
import { assert } from 'chai';
import { test } from '../src/index';
import npmPackage from '../src/index';

describe('NPM package', () => {
  it('should be an object', () => {
    assert.isObject(npmPackage);
  });

  it('should have a test property', () => {
    assert.property(npmPackage, 'test');
  });
});

describe('Test function', () => {
  it('should be a function', () => {
    assert.isFunction(test);
  });

  it('should return hello world', () => {
    const response = test();
    assert.equal(response, 'Hello world');
  });
});
