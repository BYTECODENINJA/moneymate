export const asyncHandler = (controller) => async (req, res, next) => {
    try {
        await controller(req, res, next);
    }
    catch (error) {
        if (typeof next === 'function') {
            next(error);
        }
        else {
            console.error("asyncHandler: next is missing, sending error directly", error);
            res.status(500).json({
                message: "Internal Server Error",
                error: error instanceof Error ? error.message : String(error)
            });
        }
    }
};
//# sourceMappingURL=asyncHandler.middleware.js.map