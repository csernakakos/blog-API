const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        minLength: 4,
        maxLength: 50,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        minLength: 4,
        maxLength: 50,
        unique: true,
        lowercase: true,
        validate: [validator.isEmail],
    },
    password: {
        type: String,
        required: true,
        minLength: 4,
        select: false,
    }
});

const User = mongoose.model("User", userSchema);

module.exports = User;