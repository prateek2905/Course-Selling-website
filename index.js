const express = require('express');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const z = require("zod");

const app = express();
const port = 3000;

const passwordSchema = z
  .string()
  .min(8, { message: "Password must be at least 8 characters" })
  .max(20, { message: "Password must not exceed 20 characters" })
  .regex(/[A-Z]/, { message: "Must contain at least one uppercase letter" })
  .regex(/[a-z]/, { message: "Must contain at least one lowercase letter" })
  .regex(/[0-9]/, { message: "Must contain at least one number" })
  .regex(/[^a-zA-Z0-9]/, { message: "Must contain at least one special character" });

app.post('/signup', (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    res.json({message: "working"});
})

app.post('/signin', (req, res) => {
    res.json({message: "working"});
})

app.get('/user/purchases', (req, res) => {
    res.json({message: "working"});
})

app.post('/course/purchase', (req, res) => {
    res.json({message: "working"});
})

app.get('/courses', (req, res) => {
    res.json({message: "working"});
})

app.get('/', (req, res) => {
    res.send('hello');
})
app.listen(port);