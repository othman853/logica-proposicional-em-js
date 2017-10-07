const aSet =
  (set) => ({set})

const aSentence =
  (name, formula) => ({[name]: formula})

const given =
  (...argumentParts) => argumentParts
    .reduce((allParts, aPart) => Object.assign({}, allParts, aPart), {})

module.exports = {aSet, aSentence, given}
