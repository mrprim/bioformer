function getCountOfRolledValue (roll, val) {
  roll = roll || []
  return roll.reduce(function (total, x) {
    return x === val ? total + 1 : total
  }, 0)
}

module.exports = getCountOfRolledValue
