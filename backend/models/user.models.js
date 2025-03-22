import bcrypt from 'bcryptjs';
import mongoose, { Schema } from 'mongoose';
import { Project } from './project.models.js';
const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['Admin', 'Tester', 'Developer', 'Viewer'],
    default: 'Viewer',
  },
  projects:[{
    type: Schema.Types.ObjectId,
    ref:Project
  }]
}, {
  timestamps: true,
});



userSchema.pre("save",async function(next){   //here is the pre hook that have pre existing methods like save, update,
  //  delete etc so it will be executed right before the save to the database. 
      if(!this.isModified("password")) return next();  //if password is not modified then it will go to next
      this.password = await bcrypt.hash(this.password, 10) //if password is modified then it will encrypt the password eith 10 rounds
      next() //then it will go to next
  })
  
  //here this methods is for checking if the password is correct as it is encrypted by bcrypt
  userSchema.methods.isPasswordCorrect = async function (password){  // this is for checking the password is correct or not
  return await bcrypt.compare(password, this.password)    //this will compare the password with the encrypted password
  }

 const User = mongoose.model('User', userSchema);
 export default User