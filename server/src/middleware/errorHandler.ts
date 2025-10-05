import type { Request, Response, NextFunction } from 'express';
import { ZodError } from 'zod';
import { ApiResponse } from '../utils/apiResponse.js';
import { AppError } from '../utils/AppError.js';

/**
 * Global Error Handler Middleware
 */
export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // Zod validation errors
  if (err instanceof ZodError) {
    const errors = err.issues.map((e) => `${e.path.join('.')}: ${e.message}`).join(', ');
    return res.status(400).json(
      ApiResponse.error('Dữ liệu không hợp lệ', errors)
    );
  }

  // Application errors
  if (err instanceof AppError) {
    return res.status(err.statusCode).json(
      ApiResponse.error(err.message)
    );
  }

  // Unknown errors
  console.error('❌ ERROR:', err);
  return res.status(500).json(
    ApiResponse.error('Lỗi server nội bộ', process.env.NODE_ENV === 'development' ? err.message : undefined)
  );
};

/**
 * 404 Not Found Handler
 */
export const notFoundHandler = (req: Request, res: Response) => {
  res.status(404).json(
    ApiResponse.error(`Route ${req.method} ${req.originalUrl} không tồn tại`)
  );
};
