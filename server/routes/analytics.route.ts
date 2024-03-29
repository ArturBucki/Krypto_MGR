import express from "express";
import { isAutheticated } from "../middleware/auth";
import { getCoursesAnalytics, getOrderAnalytics, getUserAnalytics } from "../controllers/analytics.controller";
import { authorizeRoles } from "../controllers/user.controller";
const analyticsRouter = express.Router();



analyticsRouter.get("/get-users-analytics", isAutheticated, authorizeRoles("admin"), getUserAnalytics)

analyticsRouter.get("/get-orders-analytics", isAutheticated, authorizeRoles("admin"), getOrderAnalytics)

analyticsRouter.get("/get-courses-analytics", isAutheticated, authorizeRoles("admin"), getCoursesAnalytics)

export default analyticsRouter;


