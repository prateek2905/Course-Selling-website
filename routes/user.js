const z = require("zod");
const { Router } = require("express");
const userRouter = Router();

const passwordSchema = z
  .string()
  .min(8, { message: "Password must be at least 8 characters" })
  .max(20, { message: "Password must not exceed 20 characters" })
  .regex(/[A-Z]/, { message: "Must contain at least one uppercase letter" })
  .regex(/[a-z]/, { message: "Must contain at least one lowercase letter" })
  .regex(/[0-9]/, { message: "Must contain at least one number" })
  .regex(/[^a-zA-Z0-9]/, { message: "Must contain at least one special character" });


    userRouter.post('/signup', (req, res) => {
        let username = req.body.username;
        let password = req.body.password;
        res.json({message: "working"});
    })
    
    userRouter.post('/signin', (req, res) => {
        res.json({message: "working"});
    })
    
    userRouter.get('/purchases', (req, res) => {
        res.json({message: "working"});
    })


module.exports = {
    userRouter: userRouter
}