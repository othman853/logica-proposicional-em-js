const aSet =
  (set) => ({set})

const aSentence =
  (name, formula) => ({[name]: formula})

const existsInGivenSet =
  (name, formula) => ({[name]: (set) => set.filter(formula)})

const given =
  (...argumentParts) => argumentParts
    .reduce((allParts, aPart) => Object.assign({}, allParts, aPart), {})

module.exports = {aSet, aSentence, existsInGivenSet, given}
