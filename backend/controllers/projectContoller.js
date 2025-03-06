import asyncHandler from 'express-async-handler'
import User from '../models/user.models.js'
import {Project, Subproject, Testcase} from '../models/project.models.js'
//this is to create the main project controller.
const createProject = asyncHandler(async (req, res) => {
  const {name} = req.body;
    const user = await User.findById(req.user._id);
    if (user) {
      const project = await Project.create({
        name,
        user
      });
      res.status(201).json({
        name: project.name,
        projectid: project._id
      });
    } else {
      res.status(404);
      throw new Error('User not logged in');
    }
  });


//this is to create subprojects under the project which they are in.
const createSubProject = asyncHandler(async(req,res)=>{
  const { name, projectid} = req.body;
    const user = await User.findById(req.user._id);
    if (user) {
      const subproject = await Subproject.create({
        name
      });
   await Project.findByIdAndUpdate(projectid, {
        $set: {
          subproject: subproject._id
        }
      });

      res.status(201).json({
        name: subproject.name,
        subprojectid: subproject._id
      });
    } else {
      res.status(404);
      throw new Error('User not logged in');
    }
})


//this is to create subprojects under the project which they are in.
const createTestCases= asyncHandler(async(req,res)=>{
const{testcasename,status,lastexecutionstatus,priority,assignedto ,subprojectid}= req.body;

const user = await User.findById(req.user._id);

if(user){
  const testcase = await Testcase.create({
    testcasename,status,lastexecutionstatus,priority,assignedto
  })
  await Subproject.findByIdAndUpdate(subprojectid, {
    $set: {
      testCaseSchema: testcase._id
    }
  });
  res.status(201).json({
    name: testcase.testcasename,
    Testcaseid: testcase._id
  });
}
else{

}


})



export {createProject, createSubProject, createTestCases}