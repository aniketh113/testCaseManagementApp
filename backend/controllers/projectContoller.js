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
  const { name, projectId} = req.body;
  console.log(projectId)
    const user = await User.findById(req.user._id);
    if (user) {
      const subproject = await Subproject.create({
        name,
        projectId
      });
   await Project.findByIdAndUpdate(projectId, {
        $push: {
          subproject: subproject._id
        }
      });
      console.log("inside sub project creating")
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

// @desc    this is to fetch the projects for the client requesting it.
// POST     /api/project/getprojects
// @access  Private
const getUserProjects = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);
    const projects = await Project.find({_id: { $in: user.projects } })
    const projectDetails = projects.map(project => ({
      id:project._id,
      name: project.name,
      createdAt: project.createdAt,
      updatedAt: project.updatedAt
  }));
  if (user) {
    res.json({
      _id: user._id,
      projects: projectDetails,
    });
  } else {
    res.status(404);
    throw new Error('User not found');
  }
});

// @desc    this is to delete the project for the client requesting it.
// POST     /api/project/deleteproject/:id
// @access  Private
const deleteProject = asyncHandler(async (req,res)=>{
  const { id } = req.params;
  try {
    const project = await Project.findByIdAndDelete(id);
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }
    res.status(200).json({ message: 'Project deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @desc    this is to fetch the projects for the client requesting it.
// POST     /api/project/getsubprojects/:id
// @access  Private
const getUserSubProjects = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(req.user._id);
  const projects = await Project.find({_id: { $in: user.projects } })
  const selectedProject = projects.filter(project => project.id == id).flatMap(subproject => subproject.subproject)
  const subprojects = await Subproject.find({_id: { $in: selectedProject } })
  const subProjectDetails = subprojects.map(project => ({
    id:project._id,
    name: project.name,
    createdAt: project.createdAt,
    updatedAt: project.updatedAt
}));
if (user) {
  res.json({
    subprojects: subProjectDetails,
  });
} else {
  res.status(404);
  throw new Error('User not found');
}
});

// @desc    this is to delete the project for the client requesting it.
// POST     /api/project/deletesubproject/:id
// @access  Private
const deleteSubProject = asyncHandler(async (req,res)=>{
  const { id } = req.params;
  try {
    const insubproject = await Subproject.findByIdAndDelete(id);
    console.log(id)
    if (!insubproject) {
      return res.status(404).json({ message: 'Project not found' });
    }
    await Project.findByIdAndUpdate(insubproject.projectId, {
        $pull: { subproject: id }
        });
        console.log(id)
    res.status(200).json({ message: 'Sub Project deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

export {createProject, 
  createSubProject, 
  createTestCases, 
  createTestScenarios, 
  getUserProjects,
  deleteProject, 
  getUserSubProjects,
  deleteSubProject
}
