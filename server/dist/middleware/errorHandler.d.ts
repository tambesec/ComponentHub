import type { Request, Response, NextFunction } from 'express';
/**
 * Simplified Error Handler Middleware
 */
export declare const errorHandler: (err: Error, req: Request, res: Response, next: NextFunction) => void;
/**
 * 404 Not Found Handler
 */
export declare const notFoundHandler: (req: Request, res: Response) => void;
//# sourceMappingURL=errorHandler.d.ts.map