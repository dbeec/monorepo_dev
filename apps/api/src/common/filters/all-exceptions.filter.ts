import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus } from "@nestjs/common";
import { Request, Response } from "express";

// Custom ExceptionFilter to handle all exceptions globally and return a JSON response
@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp()
    const response = ctx.getResponse<Response>()
    const request = ctx.getRequest<Request>()

    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR

    const message =
      exception instanceof HttpException
        ? exception.getResponse()
        : 'Internal Server Error'

    response.status(status).json({
      statusCode: status,
      timestamp: new Date().toUTCString(),
      method: request.method,
      path: request.url,
      message: typeof message === 'string' ? message : (message as any).message
    })
  }
}