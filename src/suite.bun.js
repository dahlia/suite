import {createSuite} from './shared.js'

export function setup(meta) {
  const native = Bun.jest(meta.path)
  const test = native.test.bind()
  test.skip = native.test.skip
  test.only = native.test.only
  test.ok = a => native.expect(a).toBeTruthy()
  test.is = (a, b) => native.expect(a).toBe(b)
  test.equal = (a, b) => native.expect(a).toEqual(b)
  test.throws = (fn, err) =>
    err === undefined
      ? native.expect(fn).toThrow()
      : native.expect(fn).toThrow(err)
  test.not = {
    ok: a => native.expect(a).toBeFalsy(),
    is: (a, b) => native.expect(a).not.toBe(b),
    equal: (a, b) => native.expect(a).not.toEqual(b)
  }
  test.beforeAll = native.beforeAll.bind(native)
  test.beforeEach = native.beforeEach.bind(native)
  test.afterEach = native.afterEach.bind(native)
  test.afterAll = native.afterAll.bind(native)
  return test
}

export const suite = createSuite(setup)
