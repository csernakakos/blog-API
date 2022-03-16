const express = require("express");
const router = express.Router();
const protectWithToken = require("../config/authHandler");
const {
    get_posts,
    get_post,
    create_post,
    update_post,
    delete_post,
    get_comments,
    create_comment,
    delete_comment,
} = require("../controllers/postController");

router
    .route("/")
    .get(get_posts)
    .post(protectWithToken, create_post)

router
    .route("/:ID")
    .get(get_post)
    .put(protectWithToken, update_post)
    .delete(protectWithToken, delete_post)

router
    .route("/:postID/comments")
    .get(get_comments)
    .post(create_comment)

router
    .route("/:postID/comments/:commentID")
    .delete(protectWithToken, delete_comment)

module.exports = router;