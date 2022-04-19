const Rate = require('../models/rate')

createRate = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a rate',
        })
    }

    const rate = new Rate(body)

    if (!rate) {
        return res.status(400).json({ success: false, error: err })
    }

    rate
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: rate._id,
                message: 'rate created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Rate not created!',
            })
        })
}

updateRate = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Rate.findOne({ _id: req.params.id }, (err, rate) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Rate not found!',
            })
        }
        rate.name = body.name
        rate.author = body.time
        rate.rating = body.rating
        rate
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: rate._id,
                    message: 'Rate updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Rate not updated!',
                })
            })
    })
}

deleteRate = async (req, res) => {
    await Rate.findOneAndDelete({ _id: req.params.id }, (err, rate) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!rate) {
            return res
                .status(404)
                .json({ success: false, error: `Rate not found` })
        }

        return res.status(200).json({ success: true, data: rate })
    }).catch(err => console.log(err))
}

getRateById = async (req, res) => {
    await Rate.findOne({ _id: req.params.id }, (err, rate) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!rate) {
            return res
                .status(404)
                .json({ success: false, error: `Rate not found` })
        }
        return res.status(200).json({ success: true, data: rate })
    }).catch(err => console.log(err))
}

getRates = async (req, res) => {
    await Rate.find({}, (err, rates) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!rates.length) {
            return res
                .status(404)
                .json({ success: false, error: `Rate not found` })
        }
        return res.status(200).json({ success: true, data: rates })
    }).catch(err => console.log(err))
}

module.exports = {
    createRate,
    updateRate,
    deleteRate,
    getRates,
    getRateById,
}