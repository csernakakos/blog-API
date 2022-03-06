const path = require("path");
const express = require("express");
const colors = require("colors");
const cors = require("cors");
const compression = require("compression");
const cookieParser = require("cookie-parser");
const cookieSession = require("cookie-session");
const helmet = require("helmet");
const dotenv = require("dotenv");
const {connectDB} = require("./config/db");
const {errorHandler} = require("./config/errorHandler");

const postRouter = require("./routes/postRouter");
const userRouter = require("./routes/userRouter");

dotenv.config({path: "./.env"});
const PORT = process.env.PORT || 3001;

connectDB();

const app = express();
app.use(express.json({limit: "10kb"}));
app.use(express.urlencoded({extended: true, limit: "10kb"}));

// Routes: API
app.use("/blog/api/v1/posts", postRouter);
app.use("/blog/api/v1/users", userRouter);

// Routes: frontends
// app.use("/blog", viewRouter);
// app.use("/blog/editor", editorRouter);


// Error handling middleware:
app.use(errorHandler);

app.listen(PORT, () => {console.log(`BlogAPI running on ${PORT}...`.black.bgCyan)});
