import { callerDirname } from '../src/index';

import { valueA } from '../__fixtures__/depth/a/fixture-a';
import { valueB } from '../__fixtures__/depth/a/b/fixture-b';
import { valueC } from '../__fixtures__/depth/a/b/c/fixture-c';

describe('depth option', () => {
  test('throws on wrong type, non-integer number, or non-positive number', () => {
    // @ts-ignore
    expect(() => callerDirname({ depth: 'two' })).toThrowError('integer');
    expect(() => callerDirname({ depth: 2.4 })).toThrowError('integer');
    expect(() => callerDirname({ depth: 0 })).toThrowError('positive');
  });

  test('defaults to 1', () => {
    expect(/\/__tests__$/.test(callerDirname())).toBe(true);
  });

  test('handles calling through chained imports', () => {
    expect(/\/__fixtures__\/depth\/a$/.test(valueA)).toBe(true);
    expect(/\/__fixtures__\/depth\/a\/b$/.test(valueB)).toBe(true);
    expect(/\/__fixtures__\/depth\/a\/b\/c$/.test(valueC)).toBe(true);
  });
});
