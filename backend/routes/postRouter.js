const express = require("express");
const router = express.Router();
const protectWithToken = require("../config/authHandler");
const {
    get_posts,
    get_post,
    create_post,
    update_post,
    delete_post,
} = require("../controllers/postController");

router
    .route("/")
    .get(get_posts)

router
    .route("/:ID")
    .get(get_post)
    .post(protectWithToken, create_post)
    .put(protectWithToken, update_post)
    .delete(protectWithToken, delete_post)

// router
//     .route("/:ID/comments")
//     .get(get_comments)
//     .post(create_comment)

// router
//     .route("/:ID/comments/:ID")
//     .delete(delete_comment)

module.exports = router;