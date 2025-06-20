import {
  assert,
  assertEquals,
  assertFalse,
  assertNotEquals,
  assertNotStrictEquals,
  assertStrictEquals,
  assertThrows
} from '../node_modules/@jsr/std__assert/mod.js'
import {
  afterAll,
  afterEach,
  beforeAll,
  beforeEach,
  it as native
} from '../node_modules/@jsr/std__testing/bdd.js'
import {createSuite} from './shared.js'

const test = native.bind()
test.skip = native.ignore
test.only = native.only
test.ok = assert
test.is = assertStrictEquals
test.equal = assertEquals
test.throws = assertThrows
test.not = {
  ok: assertFalse,
  is: assertNotStrictEquals,
  equal: assertNotEquals
}
test.beforeAll = beforeAll
test.beforeEach = beforeEach
test.afterEach = afterEach
test.afterAll = afterAll

export const suite = createSuite(() => test)
