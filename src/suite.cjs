const asserts = require('node:assert')
const native = require('node:test')
const {createSuite} = require('./shared.js')

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

module.exports = {
  suite: createSuite(() => test)
}
