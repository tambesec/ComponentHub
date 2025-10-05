export class ApiResponse<T = any> {/**/**

  success: boolean;

  message: string; * Standardized API Response format * Standardized API Response format

  data?: T;

  error?: string; */ */

  meta?: {

    page?: number;export class ApiResponse<T = any> {export class ApiResponse<T = any> {

    limit?: number;

    total?: number;  success: boolean;  success: boolean;

    totalPages?: number;

  };  message: string;  message: string;



  constructor(success: boolean, message: string, data?: T, meta?: any) {  data?: T;  data?: T;

    this.success = success;

    this.message = message;  error?: string;  error?: string;

    if (data !== undefined) this.data = data;

    if (meta) this.meta = meta;  meta?: {  meta?: {

  }

    page?: number;    page?: number;

  static success<T>(data: T, message = 'Thành công'): ApiResponse<T> {

    return new ApiResponse(true, message, data);    limit?: number;    limit?: number;

  }

    total?: number;    total?: number;

  static error(message: string, error?: string): ApiResponse {

    const response = new ApiResponse(false, message);    totalPages?: number;    totalPages?: number;

    if (error) response.error = error;

    return response;  };  };

  }



  static paginated<T>(

    data: T[],  constructor(success: boolean, message: string, data?: T, meta?: any) {  constructor(success: boolean, message: string, data?: T, meta?: any) {

    page: number,

    limit: number,    this.success = success;    this.success = success;

    total: number,

    message = 'Lấy dữ liệu thành công'    this.message = message;    this.message = message;

  ): ApiResponse<T[]> {

    return new ApiResponse(true, message, data, {    if (data !== undefined) this.data = data;    if (data !== undefined) this.data = data;

      page,

      limit,    if (meta) this.meta = meta;    if (meta) this.meta = meta;

      total,

      totalPages: Math.ceil(total / limit),  }  }

    });

  }

}

  static success<T>(data: T, message = 'Thành công'): ApiResponse<T> {  static success<T>(data: T, message = 'Thành công'): ApiResponse<T> {

    return new ApiResponse(true, message, data);    return new ApiResponse(true, message, data);

  }  }



  static error(message: string, error?: string): ApiResponse {  static error(message: string, error?: string): ApiResponse {

    const response = new ApiResponse(false, message);    const response = new ApiResponse(false, message);

    if (error) response.error = error;    if (error) response.error = error;

    return response;    return response;

  }  }



  static paginated<T>(  static paginated<T>(

    data: T[],    data: T[],

    page: number,    page: number,

    limit: number,    limit: number,

    total: number,    total: number,

    message = 'Lấy dữ liệu thành công'    message = 'Lấy dữ liệu thành công'

  ): ApiResponse<T[]> {  ): ApiResponse<T[]> {

    return new ApiResponse(true, message, data, {    return new ApiResponse(true, message, data, {

      page,      page,

      limit,      limit,

      total,      total,

      totalPages: Math.ceil(total / limit),      totalPages: Math.ceil(total / limit),

    });    });

  }  }

}}

