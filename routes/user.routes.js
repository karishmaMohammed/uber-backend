const express = require('express');
const router = express.Router();
const userContrls = require('../controllers/user.controller')
const {body} = require('express-validator');

router.post('/register', [
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({min:3}).withMessage('First name must be at leat 3 characters long'),
    body('password').isLength({min:6}).withMessage('Password must be at least 6 characters long')
], userContrls.registerUser)

router.post('/login',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({min:6}).withMessage('Password must be at least 6 characters long')
], userContrls.loginUser)


module.exports = router