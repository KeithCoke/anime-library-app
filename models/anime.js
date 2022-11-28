const mongoose = require('mongoose')
const Schema = mongoose.Schema

const drinkSchema = new Schema(
    {
        name: { type: String, required: true },
        year: { type: String, required: true },
        image: { type: String, default: 'https://www.equalserving.com/images/es1scplugin/image-not-available' }
    }
)

const anime = mongoose.model('Anime', animeSchema)

module.exports = anime