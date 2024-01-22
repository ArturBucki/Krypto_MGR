import express from "express";
import { addAnswer, addQuestion, addReplyToReview, addReview, deleteCourse, editCourse, getAllCourses, getCourseByUser, getSingleCourse, uploadCourse } from "../controllers/course.controller";
import { isAutheticated } from "../middleware/auth";
import { authorizeRoles } from "../controllers/user.controller";
const courseRouter = express.Router();

courseRouter.post(
  "/create-course",
  isAutheticated,
  authorizeRoles("admin"),
  uploadCourse
);

courseRouter.put(
  "/edit-course/:id",
  isAutheticated,
  authorizeRoles("admin"),
  editCourse
);

courseRouter.get(
  "/get-course/:id",
  getSingleCourse
);

courseRouter.get(
  "/get-courses",
  getAllCourses
);

courseRouter.get(
  "/get-course-content/:id",
  isAutheticated,
  getCourseByUser
);

courseRouter.put(
  "/add-question",
  isAutheticated,
  addQuestion
);

courseRouter.put(
  "/add-answer",
  isAutheticated,
  addAnswer
);

courseRouter.put(
  "/add-review/:id",
  isAutheticated,
  addReview
);

courseRouter.put(
  "/add-reply",
  isAutheticated,
  authorizeRoles("admin"),
  addReplyToReview
);

courseRouter.put(
  "/get-courses",
  isAutheticated,
  authorizeRoles("admin"),
  addReplyToReview,
  getAllCourses
);

courseRouter.delete(
  "/delete-course/:id",
  isAutheticated,
  authorizeRoles("admin"),
  deleteCourse
);


export default courseRouter
