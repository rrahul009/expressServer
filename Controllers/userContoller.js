const User = require('../Models/Schema');
const random = () => Math.floor(Math.random() * 9000 + 1000);

exports.signup = async (req, res) => {
  try {
    const data = new User(req.body);
    data.otp = random();
    await data.save();
    res.status(200).json({ status: 200, msg: "User saved successfully", data });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: 500, msg: "Something went wrong" });
  }
};


// const User = require('../Models/Schema');
// const random = Math.floor(Math.random() * 9000 + 1000);
// exports.signup = async (req, res) => {
//   const data = new User(req.body)
//   data.otp = random;
//   data.save().then(() => {
//     console.log("data save")
//     // res.status(200).send("data save successfully")
//     res.send({ status: 200, msg: "save user succes", data })
//   }).catch(() => {
//     res.status(200).send("somthing went wrong")
//   })

// }
exports.Verify = async (req, res) => {
  const { email, otp } = req.body;
  const user = await User.findOne({ email })
  if (req.body.otp === user.otp) {
    res.send({ msg: 'verified' })
    await user.save();
    res.send({ status: 200, msg: "save user succes" })
  }
  else {
    res.send({ msg: 'not verified' })
  }

}















  // // const {email,password,name}=req.body
  // const data = await new User(req.body)
  // data.save().then(()=>{
  //   console.log("saved")
  //   res.status(200).send("Data Save")
  // }).catch((err)=>{
  //   console.log(err)
  //   res.status(400).send("something Wrong")
  // })




// // OTP verification endpoint
// exports.verifyOtp = async (req, res) => {
//   try {
//     const { username, otp } = req.body;

//     // Retrieve user from database by username
//     const user = await User.findOne({ username });

//     // Verify OTP
//     if (user.otp === otp) {
//       user.otp = null; // clear OTP after successful verification
//       await user.save(); // save updated user object to database

//       res.status(200).json({ message: 'OTP verified successfully' });
//     } else {
//       res.status(400).json({ message: 'Invalid OTP' });
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Server error' });
//   }
// };
// const User = require('../Models/Schema');
//  exports.signup = async (req, res) => {
//   try {
//     const newUser = req.body;
//     const user=await User(newUser).save();
//     res.status(200).send(user)

//     res.status(200).json({ message: 'User created successfully' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Server error' });
//   }
// };


