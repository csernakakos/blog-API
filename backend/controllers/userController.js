const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

function signToken(payload) {
    return jwt.sign({payload}, process.env.JWT_SECRET, {expiresIn: "1d"})
}

// @desc    Sign up
// @route   /blog/api/v1/users/signup
// @access  Public
const post_signup = asyncHandler(async(req, res) => {

    // ERROR: some information missing
    if (!req.body.username || !req.body.email || !req.body.password) {
        res.status(400);
        throw new Error("Please provide a unique email address, a user name, and a password.")
    };

    const {username, email, password} = req.body;

    // ERROR: email already in use
    let existingUser = await User.findOne({email});
    if (existingUser) {
        res.status(400);
        throw new Error("This email address is already in use.");
    };

    // ERROR: user already in use
    existingUser = await User.findOne({username});
    if (existingUser) {
        res.status(400);
        throw new Error("This user name is already in use.");
    };

    const salt = await bcrypt.genSalt(8);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({
        username,
        email,
        password: hashedPassword,
    });

    res.status(201).json({
        status: "success",
        signedUp: true,
        data: {
            user,
            token: signToken(user._id),
        }
    })
});

// @desc    Log in
// @route   /blog/api/v1/users/login
// @access  Public
const post_login = asyncHandler(async(req, res) => {

    // ERROR: some information missing
    if (!req.body.email || !req.body.password) {
        res.status(400);
        throw new Error("Please enter your email address and password.")
    };

    const {email, password} = req.body;
    const existingUser = await User.findOne({email}).select("+password");

    if (existingUser && await bcrypt.compare(password, existingUser.password)){
        resstatus(200).json({
            status: "success",
            loggedIn: true,
            data: {
                user: existingUser,
                token: signToken(existingUser._id),
            }
        }); 
    } else {
        res.status(400)
        throw new Error("No such user exists.");
    };
});

// @desc    Log out
// @route   /blog/api/v1/users/logout
// @access  Public
const post_logout = asyncHandler(async(req, res) => {
    req.user = null;
    res.status(200).json({
        status: "success",
        loggedOut: true,
        user: req.user,
    })
});

module.exports = {
    post_signup,
    post_login,
    post_logout,
}