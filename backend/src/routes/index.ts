import { Router } from "express";
import authRoutes from "./auth.route.js";
import transactionRoutes from "./transaction.route.js";
import analyticsRoutes from "./analytics.route.js";
import reportRoutes from "./report.route.js";
import userRoutes from "./user.route.js";

const routes = Router();

routes.use("/auth", authRoutes);
routes.use("/transactions", transactionRoutes);
routes.use("/analytics", analyticsRoutes);
routes.use("/reports", reportRoutes);
routes.use("/user", userRoutes);

export default routes;
