const mongoose = require('mongoose')
const { Schema } = mongoose


const ObjectId = Schema.ObjectId

const groupSchema = new Schema({

    name: {
        type: String,
        required: true,
    },

    subject: {
        type: String,
        required: true
    },

    owner_id: {
        type: ObjectId,
        required: true,
    },

    students_id: [ObjectId],

    description: String,

    warnings: [String]

}, { timestamps: true })


const Group = mongoose.model("Group", groupSchema)

module.exports = Group