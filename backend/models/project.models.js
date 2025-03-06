import mongoose, { Schema } from "mongoose";
import User from "./user.models.js";



const testScenario = new mongoose.Schema({
scenario:{
    type:String,
    required:true
}
},{timestamps:true})

const Testscenario = mongoose.model('Testscenario',testScenario)









const testCaseSchema = new mongoose.Schema({
testcaseid:{
    type:String,
},
testcasename:{
    type:String,
    required:true
},
status:{
    type:String,
    enum:['Failed','Passed','N/A'],
    default:'N/A'
},
lastexecutionstatus:{
    type:String,
    enum:['Failed','Passed','N/A'],
    default:'N/A'
},
priority:{
    type:String,
    enum:['High','Medium','Low'],
    default:'Medium'
},
assignedto:{
    type: Schema.Types.ObjectId,
    ref:User
},
scenario:[{
type: Schema.Types.ObjectId,
ref:Testscenario
}]
},{timestamps:true})

const Testcase= mongoose.model('Testcase',testCaseSchema)



//sub project setup
const subProjectSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    testCaseSchema:[{
        type: Schema.Types.ObjectId,
        ref:Testcase}]
  },{timestamps:true});
  
const Subproject = mongoose.model('Subproject', subProjectSchema);


//main project setup
const projectSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    user:{
        type: Schema.Types.ObjectId,
        ref:User,
    },
    subproject:[{
        type: Schema.Types.ObjectId,
        ref:Subproject
    }]

},{timestamps:true})

 const Project = mongoose.model("Project", projectSchema)

 export  {Project, Subproject, Testcase }