const mongoose = require('mongoose')
const Schema = mongoose.Schema

const rateSchema = new Schema(
    {
        name: { type: String, required: true },
        author: { type: String, required: true },
        rating: { type: Number, required: true },
    },
    { timestamps: true },
)

const Rate = mongoose.model('Rate', rateSchema);
module.exports = Rate;