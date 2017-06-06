function getRandomInteger (min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function roll1dF () {
  return getRandomInteger(-1, 1)
}

function roll4dF () {
  var results = []
  results.push(roll1dF())
  results.push(roll1dF())
  results.push(roll1dF())
  results.push(roll1dF())

  return results
}

module.exports = {
  roll1dF,
  roll4dF
}
