import type { HttpStatusCodeType } from "../config/http.config.js";
import type { ErrorCodeEnumType } from "../enums/error-code.enum.js";
export declare class AppError extends Error {
    statusCode: HttpStatusCodeType;
    errorCode?: ErrorCodeEnumType | undefined;
    constructor(message: string, statusCode?: number, errorCode?: ErrorCodeEnumType | undefined);
}
export declare class HttpException extends AppError {
    constructor(message: string | undefined, statusCode: HttpStatusCodeType, errorCode?: ErrorCodeEnumType | undefined);
}
export declare class NotFoundException extends AppError {
    constructor(message?: string, errorCode?: ErrorCodeEnumType | undefined);
}
export declare class BadRequestException extends AppError {
    constructor(message?: string, errorCode?: ErrorCodeEnumType | undefined);
}
export declare class UnauthorizedException extends AppError {
    constructor(message?: string, errorCode?: ErrorCodeEnumType | undefined);
}
export declare class InternalServerException extends AppError {
    constructor(message?: string, errorCode?: ErrorCodeEnumType | undefined);
}
//# sourceMappingURL=app-error.d.ts.map