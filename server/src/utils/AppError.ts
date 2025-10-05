export class AppError extends Error {/**

  statusCode: number; * Custom Application Error

  isOperational: boolean; */

export default class AppError extends Error {

  constructor(message: string, statusCode: number = 500) {  statusCode: number;

    super(message);  isOperational: boolean;

    this.statusCode = statusCode;

    this.isOperational = true;  constructor(message: string, statusCode: number = 500) {

    Error.captureStackTrace(this, this.constructor);    super(message);

  }    this.statusCode = statusCode;

}    this.isOperational = true;

    Error.captureStackTrace(this, this.constructor);

export class BadRequestError extends AppError {  }

  constructor(message: string = 'Yêu cầu không hợp lệ') {}

    super(message, 400);

  }/**

} * Common HTTP Errors

 */

export class UnauthorizedError extends AppError {class BadRequestError extends AppError {

  constructor(message: string = 'Chưa xác thực') {  constructor(message: string = 'Yêu cầu không hợp lệ') {

    super(message, 401);    super(message, 400);

  }  }

}}



export class ForbiddenError extends AppError {class UnauthorizedError extends AppError {

  constructor(message: string = 'Không có quyền truy cập') {  constructor(message: string = 'Chưa xác thực') {

    super(message, 403);    super(message, 401);

  }  }

}}



export class NotFoundError extends AppError {class ForbiddenError extends AppError {

  constructor(message: string = 'Không tìm thấy') {  constructor(message: string = 'Không có quyền truy cập') {

    super(message, 404);    super(message, 403);

  }  }

}}



export class ConflictError extends AppError {class NotFoundError extends AppError {

  constructor(message: string = 'Dữ liệu đã tồn tại') {  constructor(message: string = 'Không tìm thấy') {

    super(message, 409);    super(message, 404);

  }  }

}}



export class ValidationError extends AppError {class ConflictError extends AppError {

  constructor(message: string = 'Dữ liệu không hợp lệ') {  constructor(message: string = 'Dữ liệu đã tồn tại') {

    super(message, 422);    super(message, 409);

  }  }

}}


class ValidationError extends AppError {
  constructor(message: string = 'Dữ liệu không hợp lệ') {
    super(message, 422);
  }
}

export {
  AppError,
  BadRequestError,
  UnauthorizedError,
  ForbiddenError,
  NotFoundError,
  ConflictError,
  ValidationError,
};
