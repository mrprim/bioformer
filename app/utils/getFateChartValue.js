var layout = require('./fateChartLayout')
var getCountOfRolledValue = require('./getCountOfRolledValue')

function getPosFromRoll (roll) {
  roll = roll || []
  var pluses = getCountOfRolledValue(roll, 1)
  var minuses = getCountOfRolledValue(roll, -1)

  return layout.reduce(function (pos, obj) {
    if (obj.column === pluses && obj.row === minuses) {
      pos = obj.pos
    }
    return pos
  }, 'a')
}

function getChartValue (chart, roll) {
  var pos = getPosFromRoll(roll)
  chart = chart || []

  var results = chart.filter(function (val, i) {
    if (val.pos === pos) {
      return val
    }
  })

  return results && results.length >= 1 && results[0]
}

module.exports = getChartValue
