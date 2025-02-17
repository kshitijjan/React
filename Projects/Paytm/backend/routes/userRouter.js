const express = require('express');
const { User, Account } = require('../db');
const { z } = require('zod');
const jwt = require('jsonwebtoken')
const JWT_SECRET = require('../config').JWT_SECRET;
const authMiddleware = require('../middleware');
const router = express.Router();

router.get('/userdetails', (req, res) => {
    res.json({msg: 'Hello from userRouter'})
})

const userSignupValidationSchema = z.object({
    firstName: z.string().min(3),
    lastName: z.string().min(3),
    username: z.string().email(),
    password: z.string().min(6)
})
const userSigninValidationSchema = z.object({
    username: z.string().email(),
    password: z.string()
})
const updateBody = z.object({
    password: z.string().optional(),
    firstName: z.string().optional(),
    lastName: z.string().optional()
})
  
router.post('/signup', async (req, res) => {
 try{
    //Taking inputs -> firstname, lastname, username, password
    const body = req.body;
    
    //Parsing using zod and checking inputs
    const {success} = userSignupValidationSchema.safeParse(body);

    if(!success){
        return res.status(411).json({
            message: 'Incorrect inputs'
        })
    }

    //Checking if user already have an account
    const user = await User.findOne({
        username: body.username
    })
    
    if(user){
        return res.status(411).json({
            message: 'User already exists, login instead' 
        })
    }

    //Adding User information in Database
    const dbUser = await User.create({
        firstName: body.firstName,
        lastName: body.lastName,
        username: body.username,
        password: body.password
    });
    const userId = dbUser._id;

    //Assigning random balance on signup
    await Account.create({
        userId,
        balance: 1 + Math.random() * 10000
    })

    //Generating token using JWT
    const token = jwt.sign({userId: userId}, JWT_SECRET) 
    
    res.status(200).json({
        message: 'User created successfully',
        token: `Bearer ${token}`
    })
    } catch(error){
    console.log(error);
    res.status(500).json({
        message: 'Error while signing up'
    })
 }
})

router.post('/signin', async (req, res) => {
    
    const body = req.body;
    const {success} = userSigninValidationSchema.safeParse(body);

    if(!success){
        return res.status(411).json({
            message: 'Incorrect Inputs'
        })
    }

    const user = await User.findOne({
        username: body.username,
        password: body.password
    })
    if(user){
        const token = jwt.sign({userId: user._id}, JWT_SECRET)

        return res.status(200).json({
            token: `Bearer ${token}`
        }) 
    }
    else{
        res.status(403).json({ 
            message: 'Invalid username or password'
        })
    }

    res.status(403).json({ 
        message: 'Error while loggin in'
    })
})

router.put('/', authMiddleware, async (req, res) => {

    const body = req.body;
    const {success} = updateBody.safeParse(body);

    if(!success){
        res.status(411).json({
            message: 'Invalid inputs'
        })
    }

    await User.updateOne({_id: req.userId} , {
        $set: body
    }) 
    res.json({
        message: 'Updated Successfully'
    })
})

router.get('/bulk', async (req, res) => {
    const filter = req.body.firstName || req.body.lastName || "";
    const users = await User.find({
        $or: [{
            firstName: {
                "$regex": filter
            }
        }, {
            lastName: {
                "$regex": filter
            }
        }]
    })
    res.json({
        user: users.map(user => ({
            key: user._id,
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            _id: user._id 
        }))
    })
})

module.exports = router