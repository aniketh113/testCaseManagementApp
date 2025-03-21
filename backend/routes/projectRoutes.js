import express from 'express'
import { createProject, createSubProject, createTestCases} from '../controllers/projectContoller.js'
import protect from '../middleware/authMiddleware.js'
const router = express.Router();

router.post('/createproject', protect,createProject);
router.post('/createsubproject',protect,createSubProject);
router.post('/createtestcase',protect,createTestCases);

export default router