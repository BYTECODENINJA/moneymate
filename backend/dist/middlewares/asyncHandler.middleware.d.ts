import type { NextFunction, Request, Response } from "express";
type AsyncControllerType = (req: Request, res: Response, next: NextFunction) => Promise<any>;
export declare const asyncHandler: (controller: AsyncControllerType) => AsyncControllerType;
export {};
//# sourceMappingURL=asyncHandler.middleware.d.ts.map