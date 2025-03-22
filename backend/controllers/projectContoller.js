import asyncHandler from 'express-async-handler'
import User from '../models/user.models.js'
import {Project, Subproject, Testcase, Testscenario} from '../models/project.models.js'

// @desc    this is to create the main project controller.
// POST     /api/project/createproject
// @access  Private
const createProject = asyncHandler(async (req, res) => {
  const {name} = req.body;
    const user = await User.findById(req.user._id);
    if (user) {
      const project = await Project.create({
        name,
        user
      });
      await User.findByIdAndUpdate(user._id, {
        $push: {
          projects: project._id
        }
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

// @desc    this is to create subprojects under the project which they are in.
// POST     /api/project/createsubproject
// @access  Private
const createSubProject = asyncHandler(async(req,res)=>{
  const { name, projectid} = req.body;
    const user = await User.findById(req.user._id);
    if (user) {
      const subproject = await Subproject.create({
        name
      });
   await Project.findByIdAndUpdate(projectid, {
        $push: {
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

// @desc    this is to create testcases under the sub project which they are in.
// POST     /api/project/createtestcase
// @access  Private
const createTestCases= asyncHandler(async(req,res)=>{
const{testcasename,status,lastexecutionstatus,priority,assignedto ,subprojectid}= req.body;

const user = await User.findById(req.user._id);

if(user){
  const testcase = await Testcase.create({
    testcasename,status,lastexecutionstatus,priority,assignedto
  })
  await Subproject.findByIdAndUpdate(subprojectid, {
    $push: {
      testCaseSchema: testcase._id
    }
  });
  res.status(201).json({
    name: testcase.testcasename,
    Testcaseid: testcase._id
  });
}
else{
  res.status(404);
  throw new Error('User not logged in');
}
})

// @desc    this is to create testcases under the sub project which they are in.
// POST     /api/project/createscenario
// @access  Private
const createTestScenarios= asyncHandler(async(req,res)=>{
  const{scenario,testcaseid}= req.body;
  
  const user = await User.findById(req.user._id);
  
  if(user){
    const testscenario = await Testscenario.create({
      scenario,testcaseid
    })
    await Testcase.findByIdAndUpdate(testcaseid, {
      $push: {
        scenario: testscenario._id
      }
    });
    res.status(201).json({
      scenario: testscenario.scenario,
      testScenarioId: testscenario._id
    });
  }
  else{
    res.status(404);
    throw new Error('User not logged in');
  }
  })

// @desc    this is to fetch the projects for the user requesting it.
// POST     /api/project/projects
// @access  Private
const getUserProjects = asyncHandler(async (req, res) => {
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

export {createProject, createSubProject, createTestCases, createTestScenarios }