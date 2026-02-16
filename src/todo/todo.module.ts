import { Module } from "@nestjs/common";
import { StatusController } from "./infraestructure/api/controller/status/StatusController";
import { StatusUseCaseService } from "./application/useCase/status/services/StatusUseCaseService";
import { StatusRepositoryAdapter } from "./infraestructure/repository/database/pg/adapter/StatusRepositoryAdapter";


@Module(
    {
        
        controllers: [StatusController],
        providers: [ StatusUseCaseService,
                StatusRepositoryAdapter,
            {
                provide: 'IStatusUseCasePort',
                useClass: StatusUseCaseService
            },
            {
                provide: 'IStatusRepositoryPort',
                useClass: StatusRepositoryAdapter
            }
            
        ],  
    }
)

export class TodoModule {}