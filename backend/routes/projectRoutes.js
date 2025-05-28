import express from 'express'
import { createProject,
    createSubProject,
    createTestCases,
    createTestScenarios,
    getUserProjects,
    deleteProject,
    getUserSubProjects,
    deleteSubProject,
    getTestCases
} from '../controllers/projectContoller.js'
import protect from '../middleware/authMiddleware.js'
const router = express.Router();
router.post('/createproject', protect,createProject);
router.get('/getprojects',protect,getUserProjects);
router.delete('/deleteproject/:id',protect,deleteProject);
router.post('/createsubproject',protect,createSubProject);
router.get('/getsubprojects/:id',protect,getUserSubProjects);
router.delete('/deletesubproject/:id',protect,deleteSubProject)
router.post('/createtestcase',protect,createTestCases);
router.get('/gettestcases/:id',protect,getTestCases)
router.post('/createscenario',protect,createTestScenarios);
export default router