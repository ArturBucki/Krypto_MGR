// routers/user.router.ts
import express from "express";
import { registrationUser, activateUser, loginUser, logoutUser, authorizeRoles } from "../controllers/user.controller";
import { isAutheticated } from "../middleware/auth";

const userRouter = express.Router();

userRouter.post("/registration", registrationUser);

userRouter.post("/activate-user", activateUser);

userRouter.post("/login-user", loginUser);

userRouter.get("/logout", isAutheticated, authorizeRoles("admin"), logoutUser);

export default userRouter;
