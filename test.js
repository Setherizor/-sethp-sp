import test from 'ava'
import x from '.'

test('should always be 6', async t => {
  t.true(await x.m() === 6)
})
