import { type Request, type Response } from "express";
import {httpStatus} from "../config/http.config.js";
import { asyncHandler } from "../middlewares/asyncHandler.middleware.js"
import { loginSchema, registerSchema } from "../validators/auth.validator.js";
import { loginService, registerService } from "../services/auth.service.js";

export const registerController = asyncHandler(
    async (req: Request, res: Response) => {
       const body = registerSchema.parse(req.body);

       const result = await registerService(body);

       return res.status(httpStatus.CREATED).json({
          message: "User registered successfully",
          data: result,
       });
    }
);

export const loginController = asyncHandler(
    async (req: Request, res: Response) => {
       const body = loginSchema.parse({
          ...req.body,
       });
       const { user, accessToken, expiresAt, reportSetting } =
           await loginService(body);

       return res.status(httpStatus.OK).json({
          message: "User logged in successfully",
          user,
          accessToken,
          expiresAt,
          reportSetting,
       });
    }
);