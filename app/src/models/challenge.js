const mongoose = require('mongoose')
const { Schema } = mongoose


const ObjectId = Schema.ObjectId

const challengeSchema = new Schema({

    name : {
        type: String,
        required: true
    },

    group: {
        type: ObjectId,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    input: {
        type: String,
        required: true
    },

    output: {
        type: String,
        required: true
    },

    difficulty: {
        type: String,
        required: true
    },

    answer: [ObjectId]


}, {timestamps: true})

const Challenge = mongoose.Model("Challenge", challengeSchema)
module.exports = Challenge
