interface IMeta {
    statusCode:number,
    message:string
}

export class ResData<DataType> {
    meta:IMeta
    constructor(statusCode:number, message:string, public data:DataType | null = null){
        this.meta = {
            statusCode, 
            message
        }
    }
}