// dependencies
require("dotenv").config();
const mongoose = require("mongoose");


const connectionString = process.env.MONGODB_URI
mongoose.connect(
    connectionString,
    { useNewUrlParser: true, useUnifiedTopology: true }
);


mongoose.connection.on('connected', () => {
    console.log('mongoose connected to ', connectionString);
});

mongoose.connection.on('disconnected', () => {
    console.log('mongoose disconnected to ', connectionString);
});

mongoose.connection.on('error', (error) => {
    console.log('mongoose error ', error);
});

module.exports.anime = require("./anime.js");
module.exports.watchList = require("./watchList.js");