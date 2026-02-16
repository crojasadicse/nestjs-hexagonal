import { IsNotEmpty } from "class-validator";

export class StatusRequestDto {

  
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    description: string;
}