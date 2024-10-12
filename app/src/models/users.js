
const mongoose = require('mongoose')
const { Schema } = mongoose
const bcrypt = require("bcrypt")
const SALT_WORK_FACTOR = 10

const ObjectId = Schema.ObjectId

const userSchema = new Schema({

    name: { 
        type: String,
        required: true
    },

    username: {
        type: String,
        required: true,
        unique: true
    },

    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },

    password: {
        type: String,
        required: true,
        select: false
    },

    groups_id: [ObjectId],

    is_teacher: Boolean

}, { timestamps: true });


userSchema.pre("save", function(next,){

    let user = this;

    if (!user.isModified('password')) return next();

    bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
        if (err) return next(err);

        bcrypt.hash(user.password, salt, function (err, hash) {
            if (err) return next(err);

            user.password = hash;
            next();
        });
    });

})

const User = mongoose.model("User", userSchema)

module.exports = User
