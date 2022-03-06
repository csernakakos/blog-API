const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please provide a post title."],
        minLength: [3, "Title needs to be at least 3 characters."],
        maxLength: [100, "Post title can't be longer than 100 characters."],
        trim: true,
    },
    body: {
        type: String,
        required: [true, "Please provide a post body."],
        minLength: [3, "Post body must be at least 3 characters."],
        trim: true,
    },
    isPublished: {
        type: Boolean,
        default: false,
    },
    relatedUserID: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
}, {timestamps: true})

const Post = mongoose.model("Post", postSchema);

module.exports = Post;