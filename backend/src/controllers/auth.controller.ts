import type {Request, Response} from "express";
import {asyncHandler} from "../middlewares/asyncHandler.middleware.js";
import {httpStatus} from "../config/http.config.js";

export const RegisterController = asyncHandler(async (req: Request, res: Response) => {
   return  res.status(httpStatus.CREATED).json({message: "User has been successfully registered"})
});