import * as koaRouter from 'koa-router';
import { 
    addCourseController,
    deleteCourseController,
    indexController,
    updateCourseController,
    viewAllCoursesController,
    viewSpecificCourseController
} from '../controllers/courseControllers.ts';

const router = new koaRouter()

// routes
router.get('/', indexController);
router.post('/addcourse', addCourseController);
router.get('/courses', viewAllCoursesController);
router.get('/course/:id', viewSpecificCourseController);
router.patch('/updatecourse/:id', updateCourseController);
router.delete('/deletecourse/:id', deleteCourseController);

export default router