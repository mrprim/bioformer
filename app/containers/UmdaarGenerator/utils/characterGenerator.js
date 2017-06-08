const lodash = require('lodash')
const { nameGenerator } = require('./nameGenerator')

const bioforms = require('../data/bioforms.fate')
const bugsAndFish = require('../data/bugsAndFish.fate')
const herpsAndDinos = require('../data/herpsAndDinos.fate')
const birdsAndMammals = require('../data/birdsAndMammals.fate')
const animalCharts = [bugsAndFish, herpsAndDinos, birdsAndMammals]

const { roll4dF } = require('../../../utils/dice')
const { getFateChartValue } = require('../data/layout.fate')

function getName () {
  const name = nameGenerator()
  return name.charAt(0).toUpperCase() + name.slice(1)
}

function formatAnimalString (animal) {
  let animalOptions = animal.subvalue ? animal.subvalue.split(',') : animal.value.split(',')

  return lodash.sample(animalOptions).trim()
}

function characterGenerator () {
  const character = {}
  const approaches = []
  const animals = []
  let firstAnimalChart

  const bioform = getFateChartValue(bioforms, roll4dF())

  if (bioform.approach) {
    approaches.push(bioform.approach)
  }

  if (bioform.animal) {
    const chart = lodash.sample(animalCharts)
    const animal = getFateChartValue(chart, roll4dF())
    const animalString = formatAnimalString(animal)

    animals.push(animalString)
    approaches.push(animal.approach)
    firstAnimalChart = chart
  }

  if (bioform.animal && bioform.secondAnimal) {
    const filteredCharts = animalCharts.filter((chart, i) => firstAnimalChart !== chart)
    const chart = lodash.sample(filteredCharts)
    const animal = getFateChartValue(chart, roll4dF())
    const animalString = formatAnimalString(animal)

    animals.push(animalString)
    approaches.push(animal.approach)
  }

  character.name = getName()
  character.type = bioform.value
  character.animals = animals
  character.primaryApproach = lodash.sample(approaches)

  return character
}

export default characterGenerator
