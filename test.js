import test from 'ava'
import x from '.'

test('The Six Test', async (t) => {
  t.true((await x.m()) === 6)
})

test('Say Say Test', async (t) => {
  const s = 'Bro what is up'
  t.true((await x.say(s)) === s)
})
