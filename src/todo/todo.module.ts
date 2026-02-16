import { Module } from "@nestjs/common";
import { StatusController } from "./infraestructure/api/controller/status/StatusController";
import { StatusUseCaseService } from "./application/useCase/status/services/StatusUseCaseService";


@Module(
    {
        
        controllers: [StatusController],
        providers: [ StatusUseCaseService,
            {
                    provide: 'IStatusUseCasePort',
                    useClass: StatusUseCaseService
            }
            
        ],  
    }
)

export class TodoModule {}