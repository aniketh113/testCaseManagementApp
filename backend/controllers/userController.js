import asyncHandler from 'express-async-handler'
import User from '../models/user.models.js'
import generateToken from '../utils/generateToken.js';

// @desc    Register a new user
// @route   POST /api/users/register
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error('User already exists');
  }

  const user = await User.create({
    name,
    email,
    password,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error('Invalid user data');
  }
});

// @desc    Auth user & get token
 // POST /api/users/login
// @access  Public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const userExists = await User.findOne({ email });
  
  if (userExists && (await userExists.isPasswordCorrect(password))) {
    const newToken = generateToken(userExists._id) 
  console.log(`logged in as ${userExists.name}`)
  return res.status(200).cookie("Token",newToken,{
    secure:false,
}).json({
    id: userExists._id,newToken
}
)
  
  } else {
    res.status(401);
    throw new Error('Invalid email or password');
  }
});

// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Private
const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
    });
  } else {
    res.status(404);
    throw new Error('User not found');
  }
});

const userLogOut = asyncHandler(async(req,res)=>{
 // @desc    Logout user
// @route   POST /api/users/logout
// @access  Private
  // Any additional server-side logic can go here

  await User.findByIdAndUpdate(
    req.user._id,{
        $set:{
            Token: undefined
        }
    },
    {
        new: true
    }
) 
return res.status(200).clearCookie("Token", {
  secure:false,
}).json(200,{
  message: "user logged out!"
})
});

export {
  registerUser,
  loginUser,
  getUserProfile,
  userLogOut
};