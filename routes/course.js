const { Router } = require("express");
const courseRouter = Router();

    courseRouter.post('/purchase', (req, res) => {
        res.json({message: "working"});
    })
    
    courseRouter.get('/', (req, res) => {
        res.json({message: "working"});
    })


module.exports = {
    courseRouter: courseRouter
}