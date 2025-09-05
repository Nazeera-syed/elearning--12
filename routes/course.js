import express from 'express'
import { checkout, fetchLecture, fetchLectures, fetchPdf, fetchPdfs, getAllCourses, getMyCourses, getSingleCourse, paymentVerification } from '../controllers/course.js';
import { isAuth } from '../middlewares/isAuth.js';

const router = express.Router();

router.get("/course/all",getAllCourses);
router.get("/course/:id",getSingleCourse);
router.get("/lectures/:id",isAuth,fetchLectures);
router.get("/lecture/:id",isAuth,fetchLecture);
router.get("/pdfs/:id",isAuth,fetchPdfs);
router.get("/pdf/:id",isAuth,fetchPdf);
router.get("/mycourse", isAuth, getMyCourses);
router.post("/course/checkout/:id",isAuth,checkout);
router.post("/verification/:id",isAuth,paymentVerification);


export default router;