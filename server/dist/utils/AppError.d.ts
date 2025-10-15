export declare class AppError extends Error {
} /**

  statusCode: number; * Custom Application Error

  isOperational: boolean; */
export default class AppError extends Error {
    constructor(message: string, statusCode?: number);
}
export declare class BadRequestError extends AppError {
}
export declare class UnauthorizedError extends AppError {
}
declare class BadRequestError extends AppError {
    constructor(message?: string);
}
export declare class ForbiddenError extends AppError {
}
declare class UnauthorizedError extends AppError {
    constructor(message?: string);
}
export declare class NotFoundError extends AppError {
}
declare class ForbiddenError extends AppError {
    constructor(message?: string);
}
export declare class ConflictError extends AppError {
}
declare class NotFoundError extends AppError {
    constructor(message?: string);
}
export declare class ValidationError extends AppError {
}
declare class ConflictError extends AppError {
    constructor(message?: string);
}
declare class ValidationError extends AppError {
    constructor(message?: string);
}
export { AppError, BadRequestError, UnauthorizedError, ForbiddenError, NotFoundError, ConflictError, ValidationError, };
//# sourceMappingURL=AppError.d.ts.map