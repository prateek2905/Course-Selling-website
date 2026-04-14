const { Router } = require("express");
const adminRouter = Router();

adminRouter.post('/signup', (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    res.json({message: "working"});
})

adminRouter.post('/signin', (req, res) => {
    res.json({message: "working"});
})

adminRouter.post('/course', (req, res) => {
    res.json({message: "working"});
})

adminRouter.put('/course', (req, res) => {
    res.json({message: "working"});
})

adminRouter.get('/courses', (req, res) => {
    res.json({message: "working"});
})
module.exports = {
    adminRouter: adminRouter
}