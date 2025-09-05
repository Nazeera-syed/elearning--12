import express from 'express'
import { isAuth,isAdmin } from '../middlewares/isAuth.js';
import { addLectures, addPdf, createCourse, deleteCourse, deleteLecture, deletePdf, getAllStats, getAllUser, updateRole } from '../controllers/admin.js';
import { uploadFiles } from '../middlewares/multer.js';

const router = express.Router();

router.post('/course/new',isAuth,isAdmin,uploadFiles,createCourse);
router.post('/course/:id',isAuth,isAdmin,uploadFiles,addLectures);
router.post('/course/pdf/:id',isAuth,isAdmin,uploadFiles,addPdf);
router.delete('/course/:id',isAuth,isAdmin,deleteCourse);
router.delete('/lecture/:id',isAuth,isAdmin,deleteLecture);
router.delete('/pdf/:id',isAuth,isAdmin,deletePdf);

router.get("/stats", isAuth, isAdmin, getAllStats);
router.put('/user/:id',isAuth,isAdmin, updateRole);
router.get('/users',isAuth,isAdmin,getAllUser)


export default router;