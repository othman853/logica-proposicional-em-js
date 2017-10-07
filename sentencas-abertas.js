// Syntatic sugar

const givenTheSet = (set) => set
const truthSetFor = (formula, givenSet) => givenSet.filter(formula)

const onlyIfOdd = (x) => x % 2 !== 0

// Problems

const C = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const P = (x) => C.includes(x * x - x - 2)

const Q = (x) => onlyIfOdd(x * x - 1)

const v = ({ of: (formula) => ({ in: (set) => set.filter(formula) }) })

const Vp = v.of(P).in(C)

const Vq = v.of(Q).in(C)

/*

given(
  thSet(C),
  theSentence('P', x => existsInTheGivenSet(x * x - x - 2)),
  theSentence('Q', x => onlyIfOdd(x * x -1))
  
.calculateTheTruthSet(of('P').and('Q'))

*/
