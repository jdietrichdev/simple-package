import 'mocha';
import { assert } from 'chai';
import { test, TEST_VALUE } from '../src/index';
import npmPackage from '../src/index';

describe('NPM package', () => {
  it('should be an object', () => {
    assert.isObject(npmPackage);
  });

  it('should have a test property', () => {
    assert.property(npmPackage, 'test');
  });

  it('should have a TEST_VALUE property', () => {
    assert.property(npmPackage, 'TEST_VALUE');
  })
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

describe('Test value', () => {
  it('should be a string', () => {
    assert.isString(TEST_VALUE);
  });

  it('should equal test', () => {
    assert.equal(TEST_VALUE, 'test');
  });
});