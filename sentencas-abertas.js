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

// Would be cool if:

  //  v.of(P).onlyIf(Q).in(C)

  //  v.of(P).ifAndOnlyIf(Q).in(C)

  //  v.of(P).and(Q)

// Would be even cooler if:

  /*

  v(of(P),
    onlyIf(Q),
    in(C))

  v(of(P),
    and(Q),
    in(C))

  */
