const express = require('express')

const RateCtrl = require('../controllers/rate-ctrl')

const router = express.Router()

router.post('/rate', RateCtrl.createRate)
router.put('/rate/:id', RateCtrl.updateRate)
router.delete('/rate/:id', RateCtrl.deleteRate)
router.get('/rate/:id', RateCtrl.getRateById)
router.get('/rates', RateCtrl.getRates)

module.exports = router