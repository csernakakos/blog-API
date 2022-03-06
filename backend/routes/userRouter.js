const express = require("express");
const {post_signup, post_login, post_logout} = require("../controllers/userController");
const router = express.Router();

router
    .route("/signup")
    .post(post_signup)

router
    .route("/login")
    .post(post_login)

router
    .route("/logout")
    .post(post_logout)

module.exports = router;