const { check, validationResult } = require('express-validator');
const User = require('../Models/Schema');

exports.forSignup = () => ([
  check('name').notEmpty().withMessage("Name can't be empty"),
  check('password')
    .notEmpty().withMessage("Password can't be empty")
    .isLength({ min: 5 }).withMessage('Password must be at least 5 characters long')
    .matches(/[A-Z]/).withMessage('Password must contain at least one uppercase letter')
    .matches(/\d/).withMessage('Password must contain at least one number')
    .isAlphanumeric().withMessage('Password must contain only letters and numbers'),
  check('email')
    .notEmpty().withMessage("Email can't be empty")
    .isEmail().withMessage('Please provide a valid email')
    .normalizeEmail()
    .custom(async (email) => {
      const user = await User.findOne({ email });
      if(user == null) {
        return true
     } else {
        throw Error('User already exist')
     }
      
    }),
]);

exports.checkError = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors });
  }
  next();
};























// const {check}=require('express-validator');
// const User = require('../Models/Schema');
// exports.forSignup = () => ([
//   check('name').exists().withMessage("name can't be empty"),
//   check('password').exists(). isLength({min:5}).isAlphanumeric().isUppercase().withMessage("pwd can't be empty"),
//   check('email').normalizeEmail().custom((async (email, { req }) => {
//       const user = await User.findOne({email});
//       if(user == null) {
//          return true
//       } else {
//          throw Error('User already exist')
//       }
//   }))
// ]);



























// // const{body,validationResult}=require('express-validator')
// // exports.validateUser=(req,res)=>{
// //   return[
// //     body('name').notEmpty().withMessage('name is required'),
// //     body('email').isEmail().withMessage('enter valid email'),
// //     body('password').isLength({min:6}).withMessage('password should be greater than 6 digit')

// //   ]
// // }
// // exports.cheackUser=(req,res,next)=>{
// //   const error=validationResult(req)
// //   if(!error.isEmpty)
// //   {
// //     return res.status(422).json({ errors: errors.array() });
// //   }
// //   else{
// //     next();
// //   }

// // }




























// // const { body, validationResult } = require('express-validator');
// // exports.validateUser = () => {
// //   return [
// //     body('name').notEmpty().withMessage('Name is required'),
// //     body('email').isEmail().withMessage('Email is not valid'),
// //     body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
// //   ]
// // }

// // exports.checkError = (req, res, next) => {
// //   const errors = validationResult(req);
// //   if (!errors.isEmpty()) {
// //     // next()
// //     return res.status(422).json({ errors: errors.array() });
// //   }
// //   else {
// //     next()
// //   }
// //   // Handle successful form submission here
// // };


