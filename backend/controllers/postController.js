const asyncHandler = require("express-async-handler");
const Comment = require("../models/commentModel");
const Post = require("../models/postModel");
const User = require("../models/userModel");

// @desc    Get all blog posts
// @route   /blog/api/v1/posts
// @access  Public
const get_posts = asyncHandler(async(req, res) => {
    const posts = await Post.find();

    res.status(200).json({
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
    let post;

    // CHECK if post exists
    try {
        post = await Post.findById(ID);
    } catch (error) {
        res.status(400);
        throw new Error("No such post!");
    }

    res.status(200).json({
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

    // ERROR: some information missing
    if (!req.body.title || !req.body.body) {
        res.status(400);
        throw new Error("Please provide a post title and a post body.");
    }

    const {title, body, isPublished} = req.body;
    let relatedUser;

    try {
        relatedUser = await User.findById(req.user._id);
    } catch (error) {
        res.status(400);
        throw new Error("Not authorized.")
    }
        
    const post = await Post.create({
        title,
        body,
        isPublished,
        relatedUserID: relatedUser._id,
    });

    res.status(201).json({
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
    let post;

    try {
        post = await Post.findByIdAndUpdate(ID, req.body, { new: true, });
    } catch (error) {
        res.status(400);
        throw new Error("Failed to update blog post.");
    }

    res.status(202).json({
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

    try {
        await Post.findByIdAndDelete(ID);
    } catch (error) {
        res.status(400);
        throw new Error("Failed to delete blog post.");
    }

    res.status(204).json({
        status: "success",
        deleteOne: true,
        deleted: ID,
    })
});

// @desc    Get all comments related to 1 blog post
// @route   /blog/api/v1/posts/:postID/comments
// @access  Public
const get_comments = asyncHandler(async(req, res) => {
    let relatedPost;
    try {
        relatedPost = await Post.findById(req.params.postID);
    } catch (error) {
        res.status(400);
        throw new Error("No such post!")
    }

    const comments = await Comment.find({relatedPostID: relatedPost._id});

    res.status(200).json({
        status: "success",
        getAllComments: true,
        items: comments.length,
        relatedPost: relatedPost._id,
        data: {
            comments
        }
    })
});

// @desc    Add 1 comment to 1 blog post
// @route   /blog/api/v1/posts/:postID/comments
// @access  Public
const create_comment = asyncHandler(async(req, res) => {

    // ERROR: some information missing
    if (!req.body.body) {
        res.status(400);
        throw new Error("Please provide a comment body.")
    }

    const { username, body } = req.body;
    const { postID } = req.params;
    let relatedPost;
    
    try {
        relatedPost = await Post.findById(postID);
    } catch (error) {
        throw new Error("No such post!");
    }

    const comment = await Comment.create({
        username,
        body,
        relatedPostID: relatedPost._id,
    });

    res.status(201).json({
        status: "success",
        createdOneComment: true,
        relatedPostID: relatedPost._id,
        data: {
            comment
        }
    })
});

// @desc    Delete 1 comment of 1 blog post
// @route   /blog/api/v1/posts/:postID/comments/:commentID
// @access  Private
const delete_comment = asyncHandler(async(req, res) => {
    const { commentID } = req.params;

    try {
       const relatedPost = await Post.findById(req.params.postID);
    } catch (error) {
        throw new Error("No such post!");
    }

    try {
        await Comment.findByIdAndDelete(commentID);
    } catch (error) {
        res.status(400);
        throw new Error("No such comment!");
    }

    res.status(204).json({
        status: "success",
        deleteOne: true,
        deleted: commentID,
    })
});


module.exports = {
    get_posts,
    get_post,
    create_post,
    update_post,
    delete_post,
    get_comments,
    create_comment,
    delete_comment,
}