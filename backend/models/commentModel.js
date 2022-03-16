const mongoose = require("mongoose");

const commentSchema = mongoose.Schema({
    username: {
        type: String,
        required: false,
        trim: true,
    },
    body: {
        type: String,
        required: [true, "Please enter a comment text."],
        minLength: [2, "Comment body must be at least 2 characters."],
        maxLength: [1000, "Comment body must be maximum 1000 characters."],
        trim: true,
    },
    relatedPostID: { type: mongoose.Schema.Types.ObjectId, ref: "Post"},

}, {timestamps: true});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;