import * as koaRouter from 'koa-router';
import { 
    addCourseController,
    deleteCourseController,
    indexController,
    updateCourseController,
    viewAllCoursesController,
    viewSpecificCourseController
} from '../controllers/courseControllers.ts';

// const koaRouter = require('koa-router');
// const {addCourseController} = require('../controllers/courseControllers.ts');
// const {deleteCourseController} = require('../controllers/courseControllers.ts');
// const {indexController} = require('../controllers/courseControllers.ts');
// const {updateCourseController} = require('../controllers/courseControllers.ts');
// const {viewAllCoursesController} = require('../controllers/courseControllers.ts');
// const {viewSpecificCourseController} = require('../controllers/courseControllers.ts');

const router = new koaRouter()

// routes
router.get('/', indexController);
router.post('/addcourse', addCourseController);
router.get('/courses', viewAllCoursesController);
router.get('/course/:id', viewSpecificCourseController);
router.patch('/updatecourse/:id', updateCourseController);
router.delete('/deletecourse/:id', deleteCourseController);

export default router