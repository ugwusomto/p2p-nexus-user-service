import {
  ArgumentsHost,
  Catch,
  RpcExceptionFilter,
  HttpException,
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';
import { Observable, throwError } from 'rxjs';
import { RpcException } from '@nestjs/microservices';

@Catch()
export class GlobalRpcExceptionFilter implements RpcExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost): Observable<any> {
    let response;

    // if (exception instanceof ConflictException) {
    //   response = {
    //     status: false,
    //     message: exception.message
    //   };
    // } else if (exception instanceof HttpException) {
    //   const statusCode = exception.getStatus();
    //   response = {
    //     status: false,
    //     message: exception.message,
    //   };
    // } else {
    //   response = {
    //     status: false,
    //     message: 'Internal Server Error',
    //   };
    // }

    // response.message = Array.isArray(response.message) ? response.message[0] : response.message,

    const result =  throwError(() => new RpcException(response));
    console.log(result)
    return result
  }
}
