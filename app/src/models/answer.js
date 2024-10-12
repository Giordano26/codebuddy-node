const mongoose = require('mongoose')
const { Schema } = mongoose


const ObjectId = Schema.ObjectId


const answerSchema = new Schema({

    student_id : {
        type : ObjectId,
        required: true
    },

    code_snippet: {
        type: String,
        required: true
    }

}, {timestamps: true})

const Answer = mongoose.Model("Answer", answerSchema)

module.exports = Answer