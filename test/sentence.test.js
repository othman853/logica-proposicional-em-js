const test=
  require('ava')

const {sentence, isContainedIn, apply, to}=
  require('../src/sentence')

test('isContainedIn is applied to the set S = {1, 2, 3, 4, 5}, it preserves x if x * x - x - 2 belongs to the set S', t => {

  const S=
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  const P=
    sentence(
      x =>
        x * x - x - 2,
      isContainedIn(S))

  t.deepEqual(
    apply(P,
      to(S)),
    [3, 4])
})

test('Results in a set of odd numbers contained in S = {1, 2, 3, 4, 5}', t => {

  const S=
    [1, 2, 3, 4, 5]

  const P=
    sentence(x =>
      x % 2 !== 0)

  t.deepEqual(
    apply(P,
      to(S)),
    [1, 3, 5])

})
