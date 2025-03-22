import { HttpException, HttpStatus } from "@nestjs/common";

export class RowNotFound extends HttpException {
    constructor(){
        super("row not found", HttpStatus.NOT_FOUND)
    }
}