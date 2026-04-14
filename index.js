const express = require('express');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const { userRouter } = require("./routes/user");
const { courseRouter } = require("./routes/course");

const app = express();
const port = 3000;

app.use("/user", userRouter);
app.use("/course", courseRouter);

app.get('/', (req, res) => {
    res.send('hello');
})

app.listen(port);