const sentence=
  (formula, chainedOperation) =>
    (x) =>
      chainedOperation
        ? chainedOperation(formula(x))
        : formula(x)

const apply=
  (sentence, set) =>
    set.filter(sentence)

const to=
  (set) =>
    set

const isContainedIn=
  (set) =>
    (value) =>
      set.includes(value)

module.exports=
  {sentence, isContainedIn, apply, to}
