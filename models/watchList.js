const mongoose = require('mongoose')
const Schema = mongoose.Schema

const watchListSchema = new Schema(
    {
        title: { type: String, default: 'Untitled Anime' },
        description: { type: String, required: true },
    }
)

const watchList = mongoose.model('watchList', watchListSchema)

module.exports = watchList