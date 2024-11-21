import { HttpException, HttpStatus } from '@nestjs/common';

export class ResponseUtil {
  static success(data: any, code = HttpStatus.OK) {
    return {
      success: true,
      code,
      data,
    };
  }

  static error(
    message: string,
    details: string = "",
    code :HttpStatus = HttpStatus.INTERNAL_SERVER_ERROR
  ) {
    return {
        success: false, 
        code,
        error: {
            message: message, 
            details: details
        } 

    }
  }
}
