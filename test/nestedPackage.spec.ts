import 'mocha';
import { assert } from 'chai';
import { nested, TEST_VALUE } from '../src/nestedPackage';
import npmPackage from '../src/nestedPackage';

describe('Package', () => {
  it('should be an object', () => {
    assert.isObject(npmPackage);
  });

  it('should have a nested property', () => {
    assert.property(npmPackage, 'nested');
  });

  it('should have a TEST_VALUE property', () => {
    assert.property(npmPackage, 'TEST_VALUE');
  });
});

describe('nested function', () => {
  it('should be a function', () => {
    assert.isFunction(nested);
  });

  it('should return nested function', () => {
    assert.equal('nested function', nested());
  });
});

describe('TEST_VALUE variable', () => {
  it('should be a string', () => {
    assert.isString(TEST_VALUE);
  });

  it('should equal test', () => {
    assert.equal('test', TEST_VALUE);
  });
});
