import { Router } from "express";
import authRoutes from "./auth.route.js";
import transactionRoutes from "./transaction.route.js";
import analyticsRoutes from "./analytics.route.js";
import reportRoutes from "./report.route.js";
import userRoutes from "./user.route.js";
import { passportAuthenticateJwt } from "../config/passport.config.js";

const routes = Router();

// Public routes (no auth required)
routes.use("/auth", authRoutes);

// Protected routes (JWT required)
routes.use("/transactions", passportAuthenticateJwt, transactionRoutes);
routes.use("/analytics", passportAuthenticateJwt, analyticsRoutes);
routes.use("/reports", passportAuthenticateJwt, reportRoutes);
routes.use("/user", passportAuthenticateJwt, userRoutes);

export default routes;
