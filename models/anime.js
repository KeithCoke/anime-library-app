const mongoose = require('mongoose')
const Schema = mongoose.Schema

const animeSchema = new Schema(
    {
        name: { type: String, required: true },
        year: { type: Number, default: 0000 },
        image: { type: String, default: 'https://www.equalserving.com/images/es1scplugin/image-not-available' }
    }
)

const anime = mongoose.model('Anime', animeSchema)

module.exports = anime