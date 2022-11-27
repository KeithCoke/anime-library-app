const mongoose = require('mongoose')
const Schema = mongoose.Schema

const drinkSchema = new Schema(
    {
        name: { type: String, required: true },
        price: { type: String, required: true },
        image: { type: String, default: 'https://www.equalserving.com/images/es1scplugin/image-not-available' }
    }
)

const Drink = mongoose.model('Drink', drinkSchema)

// export the Drink model to be accessed in 'index.js'
module.exports = Drink