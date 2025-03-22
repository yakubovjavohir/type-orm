import { HttpException, HttpStatus } from "@nestjs/common";

export class UserDetailFound extends HttpException {
    constructor(){
        super("detail not found", HttpStatus.NOT_FOUND)
    }
}