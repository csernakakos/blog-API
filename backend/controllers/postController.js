const asyncHandler = require("express-async-handler");
const Post = require("../models/postModel");
const User = require("../models/userModel");

// @desc    Get all blog posts
// @route   /blog/api/v1/posts
// @access  Public
const get_posts = asyncHandler(async(req, res) => {
    const posts = await Post.find();

    res.json({
        status: "success",
        getAllPosts: true,
        items: posts.length,
        data: {
            posts
        }
    })
});

// @desc    Get 1 blog post
// @route   /blog/api/v1/posts/:ID
// @access  Public
const get_post = asyncHandler(async(req, res) => {
    const {ID} = req.params;
    const post = await Post.findById(ID);

    res.json({
        status: "success",
        getOnePost: true,
        data: {
            post
        }
    })
});

// @desc    Create 1 blog post
// @route   /blog/api/v1/posts/
// @access  Private
const create_post = asyncHandler(async(req, res) => {
    const {title, body, isPublished} = req.body;
    
    const relatedUser = await User.findById(req.user._id);
    console.log(relatedUser.username, "<<<< CREATOR");


    const post = await Post.create({
        title,
        body,
        isPublished,
        relatedUserID: relatedUser._id,
    });

    res.json({
        status: "success",
        createdOnePost: true,
        data: {
            post
        }
    })
});

// @desc    Update 1 blog post
// @route   /blog/api/v1/posts/:ID
// @access  Private
const update_post = asyncHandler(async(req, res) => {
    const {ID} = req.params;
    const post = await Post.findByIdAndUpdate(ID, req.body, { new: true, });

    res.json({
        status: "success",
        updatedOnePost: true,
        data: {
            post
        }
    })
});

// @desc    Delete 1 blog post
// @route   /blog/api/v1/posts/:ID
// @access  Private
const delete_post = asyncHandler(async(req, res) => {
    const {ID} = req.params;
    const post = await Post.findByIdAndDelete(ID);

    res.json({
        status: "success",
        deleteOne: true,
        deleted: ID,
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