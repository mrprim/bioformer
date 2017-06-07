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
  const approaches = []

  character.bioform.type = bioform.value
  character.bioform.animals = []

  if (bioform.approach) {
    approaches.push(bioform.approach)
  }

  if (bioform.animal) {
    animalChart = lodash.sample(animalCharts)
    const animal = getFateChartValue(animalChart, dice.roll4dF())
    character.bioform.animals.push(lodash.sample(animal.value.split(',')) + (animal.subvalue ? ' [' + lodash.sample(animal.subvalue.split(',')).trim() + ']' : ''))
    approaches.push(animal.approach)
  }

  if (bioform.animal && bioform.secondAnimal) {
    const filteredCharts = animalCharts.filter(function (chart, i) {
      if (animalChart !== chart) {
        return true
      }
    })
    secondAnimalChart = lodash.sample(filteredCharts)
    const animal = getFateChartValue(secondAnimalChart, dice.roll4dF())
    character.bioform.animals.push(lodash.sample(animal.value.split(',')) + (animal.subvalue ? ' [' + lodash.sample(animal.subvalue.split(',')).trim() + ']' : ''))
    approaches.push(animal.approach)
  }

  character.bioform.approach = lodash.sample(approaches)
  return character
}

module.exports = buildCharacter
