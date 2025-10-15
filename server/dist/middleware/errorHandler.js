/**
 * Simplified Error Handler Middleware
 */
export const errorHandler = (err, req, res, next) => {
    console.error('❌ ERROR:', err);
    const statusCode = err.statusCode || 500;
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
export const notFoundHandler = (req, res) => {
    res.status(404).json({
        success: false,
        message: `Route ${req.method} ${req.originalUrl} không tồn tại`
    });
};
//# sourceMappingURL=errorHandler.js.map