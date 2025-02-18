export function createSuite(setup) {
  return (meta, define) => {
    const test = setup(meta)
    if (typeof define === 'function') return define(test)
    const ctx = define
    if (typeof ctx === 'object') {
      if ('beforeAll' in ctx) test.beforeAll(ctx.beforeAll.bind(ctx))
      if ('beforeEach' in ctx) test.beforeEach(ctx.beforeEach.bind(ctx))
      if ('afterEach' in ctx) test.afterEach(ctx.afterEach.bind(ctx))
      if ('afterAll' in ctx) test.afterAll(ctx.afterAll.bind(ctx))
    }
    return Object.assign((name, run) => {
      return test(name, () => {
        return run(ctx)
      })
    }, test)
  }
}
