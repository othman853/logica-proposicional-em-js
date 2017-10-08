const test = require('ava')

const {given, aSet, aSentence} = require('../src/argument')

test('aSet builds the partial set object', t => {
  const S = [1, 2, 3]

  const partialArgument = aSet(S)

  t.deepEqual(partialArgument, {set: [1, 2, 3]})
})

test('given builds an argument with a set', t => {

  const S = [1, 2, 3]

  const argument = given(aSet(S))

  t.deepEqual(
    argument,
    {set: [1, 2, 3]})
})

test('given builds an argument with a sentence P', t => {

  const argument = given(aSentence('P', x =>  x + 1))

  t.deepEqual(argument.P(1), 2)
})

test('given builds an argument with a sentence P(x) = x + 1 and a set S = {1, 2, 3}', t => {

  const S = [1, 2, 3]

  const argument = given(
    aSet(S),
    aSentence('P', x => x + 1))

  t.deepEqual(argument.set, [1, 2, 3])
  t.deepEqual(argument.P(1), 2)
})

test('given builds an argument with a sentence P(x) = x + 1, a sentence Q(x) = x + 2 and a set S = {1, 2, 3}', t => {

  const S = [1, 2, 3]

  const argument = given(
    aSet(S),
    aSentence('P', x => x + 1),
    aSentence('Q', x => x + 2))

  t.deepEqual(argument.set, [1, 2, 3])
  t.deepEqual(argument.P(1), 2)
  t.deepEqual(argument.Q(2), 4)
})
