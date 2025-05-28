import mongoose, { Schema } from "mongoose";
import User from "./user.models.js";

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
        ref:'User'
    },
    scenario:[{
    type: Schema.Types.ObjectId,
    ref:'Testscenario'
    }]
    },{timestamps:true})

//sub project setup
const subProjectSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    projectId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Project',
    required: true
    },
    testCaseSchema:[{
        type: Schema.Types.ObjectId,
        ref:'Testcase'}]
  },{timestamps:true});

//main project setup
const projectSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    subproject:[{
        type: Schema.Types.ObjectId,
        ref:'Subproject'
    }]
},{timestamps:true})

const testScenario = new mongoose.Schema({
scenario:{
    type:String,
    required:true
}
},{timestamps:true})

const Testscenario = mongoose.model('Testscenario',testScenario)
const Testcase= mongoose.model('Testcase',testCaseSchema) 
const Subproject = mongoose.model('Subproject', subProjectSchema);
const Project = mongoose.model("Project", projectSchema)

export  {Project, Subproject, Testcase, Testscenario }