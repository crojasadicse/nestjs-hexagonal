import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { StatusEntity } from "./infraestructure/repository/database/pg/entities/StatusEntity";

@Module({
    imports: [

        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            name: 'postgres',
            useFactory: () => ({
                type: 'postgres',
                host: 'localhost',
                port: 5432,
                username: 'postgres',
                password: 'postgres',
                database: 'todo_db',
                entities: [StatusEntity],
                synchronize: true,
            }),
        }),

    ],


})
export class DatabaseModule {}