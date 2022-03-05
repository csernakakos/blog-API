const express = require("express");
const router = express.Router();

router
    .route("/login")
    .get(get_login)
    .post(post_login)

router
    .route("/logout")
    .get(get_logout)
    .post(post_logout)

module.exports = router;