const lodash = require('lodash')
const dice = require('./dice')
const getFateChartValue = require('./getFateChartValue')
const bioforms = require('../data/bioforms')
const bugsAndFish = require('../data/bugsAndFish')
const herpsAndDinos = require('../data/herpsAndDinos')
const birdsAndMammals = require('../data/birdsAndMammals')
const animalCharts = [bugsAndFish, herpsAndDinos, birdsAndMammals]

function buildCharacter () {
  let animalChart, secondAnimalChart
  const character = {
    bioform: {}
  }

  const bioform = getFateChartValue(bioforms, dice.roll4dF())

  character.bioform.type = bioform.value
  character.bioform.animals = []
  character.bioform.approaches = []

  if (bioform.approach) {
    character.bioform.approaches.push(bioform.approach)
  }

  if (bioform.animal) {
    animalChart = lodash.sample(animalCharts)
    const animal = getFateChartValue(animalChart, dice.roll4dF())
    character.bioform.animals.push(animal.value + (animal.subvalue ? ' (' + animal.subvalue + ')' : ''))
    character.bioform.approaches.push(animal.approach)
  }

  if (bioform.animal && bioform.secondAnimal) {
    const filteredCharts = animalCharts.filter(function (chart, i) {
      if (animalChart !== chart) {
        return true
      }
    })
    secondAnimalChart = lodash.sample(filteredCharts)
    const animal = getFateChartValue(secondAnimalChart, dice.roll4dF())
    character.bioform.animals.push(animal.value + (animal.subvalue ? ' (' + animal.subvalue + ')' : ''))
    character.bioform.approaches.push(animal.approach)
  }

  return character
}

module.exports = buildCharacter
