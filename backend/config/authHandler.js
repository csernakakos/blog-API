const protectWithToken = (req, res, next) => {
    console.log("PROTECTED!")
    next();
}

module.exports = protectWithToken;