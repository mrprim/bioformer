const lodash = require('lodash')
const { nameGenerator } = require('./nameGenerator')

const bioforms = require('../data/bioforms.fate')
const bugsAndFish = require('../data/bugsAndFish.fate')
const herpsAndDinos = require('../data/herpsAndDinos.fate')
const birdsAndMammals = require('../data/birdsAndMammals.fate')
const animalCharts = [bugsAndFish, herpsAndDinos, birdsAndMammals]

const { roll4dF } = require('../../../utils/dice')
const { getFateChartValue } = require('../data/layout.fate')

function parseAnimalString (animal) {
  let animalOptions = animal.subvalue ? animal.subvalue.split(',') : animal.value.split(',')

  return lodash.sample(animalOptions).trim()
}

function getName () {
  const name = nameGenerator()
  return name.charAt(0).toUpperCase() + name.slice(1)
}

function characterGenerator () {
  let animalChart, secondAnimalChart
  const character = {}

  const bioform = getFateChartValue(bioforms, roll4dF())
  const approaches = []
  character.name = getName()
  character.type = bioform.value
  character.animals = []

  if (bioform.approach) {
    approaches.push(bioform.approach)
  }

  if (bioform.animal) {
    animalChart = lodash.sample(animalCharts)
    const animal = getFateChartValue(animalChart, roll4dF())
    character.animals.push(parseAnimalString(animal))
    approaches.push(animal.approach)
  }

  if (bioform.animal && bioform.secondAnimal) {
    const filteredCharts = animalCharts.filter(function (chart, i) {
      if (animalChart !== chart) {
        return true
      }
    })
    secondAnimalChart = lodash.sample(filteredCharts)
    const animal = getFateChartValue(secondAnimalChart, roll4dF())
    character.animals.push(parseAnimalString(animal))
    approaches.push(animal.approach)
  }

  character.primaryApproach = lodash.sample(approaches)
  return character
}

export default characterGenerator
