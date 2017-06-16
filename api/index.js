const express = require('express')
const umdaar = require('./umdaar')
const router = express.Router({
  mergeParams: true
})

router.get('/umdaar/character', umdaar.character)

module.exports = router
