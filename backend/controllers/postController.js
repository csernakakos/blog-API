const asyncHandler = require("express-async-handler");

// @desc    Get all blog posts
// @route   /blog/api/v1/posts
// @access  Public
const get_posts = asyncHandler(async(req, res) => {
    res.json({
        getAll: true,
    })
});

// @desc    Get 1 blog post
// @route   /blog/api/v1/posts/:ID
// @access  Public
const get_post = asyncHandler(async(req, res) => {
    res.json({
        getOne: true,
    })
});

// @desc    Create 1 blog post
// @route   /blog/api/v1/posts/:ID
// @access  Private
const create_post = asyncHandler(async(req, res) => {
    res.json({
        createOne: true,
    })
});

// @desc    Update 1 blog post
// @route   /blog/api/v1/posts/:ID
// @access  Private
const update_post = asyncHandler(async(req, res) => {
    res.json({
        updateOne: true,
    })
});

// @desc    Delete 1 blog post
// @route   /blog/api/v1/posts/:ID
// @access  Private
const delete_post = asyncHandler(async(req, res) => {
    res.json({
        deleteOne: true,
    })
});

// @desc    Get all comments related to 1 blog post
// @route   /blog/api/v1/posts/:ID/comments
// @access  Public
const get_comments = asyncHandler(async(req, res) => {
    res.json({
        getOne: true,
    })
});

// @desc    Add 1 comment to 1 blog post
// @route   /blog/api/v1/posts/:ID/comments
// @access  Public
const create_comment = asyncHandler(async(req, res) => {
    res.json({
        createOne: true,
    })
});


module.exports = {
    get_posts,
    get_post,
    create_post,
    update_post,
    delete_post,
}