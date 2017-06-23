const express = require('express')
const umdaar = require('./umdaar')
const fate = require('./fate')
const router = express.Router({
  mergeParams: true
})

router.get('/umdaar/character', umdaar.character)

router.get('/fate/weapon', fate.getRandomWeapon)
router.get('/fate/weapon/category', fate.getWeaponCategories)
router.get('/fate/weapon/technology', fate.getWeaponTechnologies)

module.exports = router
