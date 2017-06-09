const { sample, remove } = require('lodash')
const { nameGenerator } = require('./nameGenerator')

const bioforms = require('../data/bioforms.fate')

const bugsAndFish = require('../data/bugsAndFish.fate')
const herpsAndDinos = require('../data/herpsAndDinos.fate')
const birdsAndMammals = require('../data/birdsAndMammals.fate')
const animalCharts = [bugsAndFish, herpsAndDinos, birdsAndMammals]

const powers = require('../data/powers.fate')
const weapons = require('../data/weapons.fate')
const adaptations = require('../data/adaptations.fate')
const stuntCharts = [powers, weapons, adaptations]

const { roll4dF } = require('../../../utils/dice')
const { getFateChartValue } = require('../data/layout.fate')

function getName () {
  const name = nameGenerator()
  return name.charAt(0).toUpperCase() + name.slice(1)
}

function formatAnimalString (animal) {
  let animalOptions = animal.subvalue ? animal.subvalue.split(',') : animal.value.split(',')

  return sample(animalOptions).trim()
}

function getApproaches (setupApproaches) {
  const rslt = []
  let values = [3, 2, 2, 1, 1, 0]
  let approaches = ['Careful', 'Clever', 'Flashy', 'Forceful', 'Quick', 'Sneaky']

  while (setupApproaches.length > 0) {
    let approach = sample(setupApproaches)
    let value = values[0]
    rslt.push({approach, value})
    setupApproaches = setupApproaches.filter(a => a !== approach)
    approaches = approaches.filter(a => a !== approach)
    values.shift()
  }

  console.log('phase 2 approaches', approaches)
  while (approaches.length > 0) {
    let approach = sample(approaches)
    let value = values[0]
    rslt.push({approach, value})
    approaches = approaches.filter(a => a !== approach)
    values.shift()
  }

  rslt.sort((a, b) => {
    if (a.value < b.value) {
      return +1
    }
    if (a.value > b.value) {
      return -1
    }
    if (a.approach < b.approach) {
      return -1
    }
    if (a.approach > b.approach) {
      return +1
    }
    return 0
  })
  return rslt
}

function getStunt (previousStunt) {
  const stuntChart = sample(stuntCharts)
  let stunt = getFateChartValue(stuntChart, roll4dF())

  while (stunt === previousStunt) {
    stunt = getFateChartValue(stuntChart, roll4dF())
  }

  if (stuntChart === powers) {
    stunt.type = 'Power'
  } else if (stuntChart === adaptations) {
    stunt.type = 'Adaptation'
  } else if (stuntChart === weapons) {
    stunt.type = 'Weapon'
  }
  return stunt
}

function characterGenerator () {
  const character = {}
  const animals = []
  const stunts = []
  let setupApproaches = []
  let firstAnimalChart

  const bioform = getFateChartValue(bioforms, roll4dF())

  if (bioform.approach) {
    setupApproaches.push(bioform.approach)
  }

  if (bioform.animal) {
    const chart = sample(animalCharts)
    const animal = getFateChartValue(chart, roll4dF())
    const animalString = formatAnimalString(animal)

    animals.push(animalString)
    setupApproaches.push(animal.approach)
    firstAnimalChart = chart
  }

  if (bioform.animal && bioform.secondAnimal) {
    const filteredCharts = animalCharts.filter((chart, i) => firstAnimalChart !== chart)
    const chart = sample(filteredCharts)
    const animal = getFateChartValue(chart, roll4dF())
    const animalString = formatAnimalString(animal)

    animals.push(animalString)
    setupApproaches.push(animal.approach)
  }

  const stunt1 = getStunt()
  const stunt2 = getStunt(stunt1)

  stunts.push(stunt1)
  setupApproaches.push(sample(stunt1.approach.split('/')))
  stunts.push(stunt2)
  setupApproaches.push(sample(stunt2.approach.split('/')))

  character.name = getName()
  character.type = bioform.value
  character.animals = animals
  character.stunts = stunts
  character.approaches = getApproaches(setupApproaches)
  return character
}

export default characterGenerator
