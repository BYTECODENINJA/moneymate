import type {NextFunction, Request, Response} from "express";

type AsyncControllerType = (
    req: Request,
    res: Response,
    next: NextFunction
) => Promise<any>;

export const asyncHandler = (controller: AsyncControllerType):
AsyncControllerType => async (req, res, next) => {
    try {
        await controller(req, res, next);
    } catch (error) {
        if (typeof next === 'function') {
            next(error);
        } else {
            console.error("asyncHandler: next is missing, sending error directly", error);
            res.status(500).json({
                message: "Internal Server Error",
                error: error instanceof Error ? error.message : String(error)
            });
        }
    }
}