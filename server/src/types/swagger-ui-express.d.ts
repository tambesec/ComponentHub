declare module 'swagger-ui-express' {
  import { RequestHandler } from 'express';

  export interface SwaggerUiOptions {
    explorer?: boolean;
    swaggerOptions?: any;
    customCss?: string;
    customCssUrl?: string;
    customJs?: string;
    customfavIcon?: string;
    swaggerUrl?: string;
    customSiteTitle?: string;
  }

  export const serve: RequestHandler[];
  export function setup(
    swaggerDoc: any,
    options?: SwaggerUiOptions,
    customCss?: string,
    customfavIcon?: string,
    swaggerUrl?: string,
    customSiteTitle?: string
  ): RequestHandler;
  
  export function serveFiles(swaggerDoc: any, options?: SwaggerUiOptions): RequestHandler;
  export function serveWithOptions(options: SwaggerUiOptions): RequestHandler;
}
