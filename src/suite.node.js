import * as asserts from 'node:assert'
import * as native from 'node:test'
import {createSuite} from './shared.js'

const test = native.test.bind()
test.skip = native.skip
test.only = native.only
test.ok = asserts.ok
test.is = asserts.strictEqual
test.equal = asserts.deepStrictEqual
test.throws = asserts.throws
test.not = {
  ok: a => asserts.ok(!a),
  is: asserts.notStrictEqual,
  equal: asserts.notDeepStrictEqual
}
test.beforeAll = native.before.bind(native)
test.beforeEach = native.beforeEach.bind(native)
test.afterEach = native.afterEach.bind(native)
test.afterAll = native.after.bind(native)

export const suite = createSuite(() => test)
