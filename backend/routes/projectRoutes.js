import express from 'express'
import { createProject, createSubProject, createTestCases, createTestScenarios,getUserProjects, deleteProject} from '../controllers/projectContoller.js'
import protect from '../middleware/authMiddleware.js'
const router = express.Router();

router.post('/createproject', protect,createProject);
router.post('/createsubproject',protect,createSubProject);
router.post('/createtestcase',protect,createTestCases);
router.post('/createscenario',protect,createTestScenarios);
router.get('/getprojects',protect,getUserProjects);
router.delete('/deleteproject/:id',protect,deleteProject)
export default router