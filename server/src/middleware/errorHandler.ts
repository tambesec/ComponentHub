import type { Request, Response, NextFunction } from 'express';

/**
 * Simplified Error Handler Middleware
 */
export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error('❌ ERROR:', err);
  
  const statusCode = (err as any).statusCode || 500;
  const message = err.message || 'Lỗi server nội bộ';
  
  res.status(statusCode).json({
    success: false,
    message,
    error: process.env.NODE_ENV === 'development' ? err.stack : undefined
  });
};

/**
 * 404 Not Found Handler
 */
export const notFoundHandler = (req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: `Route ${req.method} ${req.originalUrl} không tồn tại`
  });
};
