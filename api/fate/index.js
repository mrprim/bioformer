const sample = require('lodash/sample')
const categories = require('./data/weaponCategories')
const technologies = require('./data/weaponTechnologies')

function getWeaponCategories (req, res) {
  res.json(categories)
}

function getWeaponTechnologies (req, res) {
  res.json(technologies)
}

function getRandomWeapon (req, res) {
  const weapon = {
    category: sample(categories),
    technology: sample(technologies)
  }
  res.json(weapon)
}
module.exports = {
  getWeaponCategories,
  getWeaponTechnologies,
  getRandomWeapon
}
