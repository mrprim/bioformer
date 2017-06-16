const generateCharacter = require('./utils/characterGenerator')

function character (req, res) {
  const character = generateCharacter()
  res.json(character)
}

module.exports = {
  character
}
