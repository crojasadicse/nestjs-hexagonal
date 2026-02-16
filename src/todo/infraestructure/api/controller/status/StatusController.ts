import { Controller, Get, Inject } from "@nestjs/common";
import { StatusUseCaseService } from "src/todo/application/useCase/status/services/StatusUseCaseService";


@Controller('/status')
export class StatusController {

 
    constructor(private readonly statusUseCaseService: StatusUseCaseService) {
        
    }
   


   @Get('')
   getStatusByName() {
    console.log("entro al controller");
    const status = this.statusUseCaseService.getStatusByName("Test");
    console.log("status obtenido: ", status);
     return this.statusUseCaseService.getStatusByName("Test");
   }

   

}