import { HttpException, HttpStatus } from "@nestjs/common";

export class UserNotFound extends HttpException {
    constructor(){
        super("user not found", HttpStatus.NOT_FOUND)
    }
}

export class PasswordError extends HttpException {
    constructor(){
        super("password and confirmPassword do not match", HttpStatus.BAD_REQUEST)
    }
}