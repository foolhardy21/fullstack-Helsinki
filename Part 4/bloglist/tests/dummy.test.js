const dummy = require('../util/list_helper').dummy

test('dummy returns one',() => {
  const blogs = []

  const result = dummy(blogs)
  expect(result).toBe(1)
})
