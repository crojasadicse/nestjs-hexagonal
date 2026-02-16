import { StatusModel } from "src/todo/domain/models/status";
import { IStatusRepositoryPort } from "src/todo/domain/repository/IStatusResposotyPort";


export class StatusRepositoryAdapter implements IStatusRepositoryPort {


    findAll(): Promise<StatusModel[]> {
        throw new Error("Method not implemented.");
    }
    async getStatusByName(name: string): Promise<StatusModel | null> {
        const status = new StatusModel(
            1,
            'Status ' + name,
            "Status description for " + name,
            new Date(),
            new Date()
        );

        return Promise.resolve(status);
        
    }
    create(item: StatusModel): Promise<StatusModel> {
        throw new Error("Method not implemented.");
    }
    read(id: number): Promise<StatusModel | null> {
        throw new Error("Method not implemented.");
    }
    update(id: number, item: StatusModel): Promise<StatusModel> {
        throw new Error("Method not implemented.");
    }
    delete(id: number): Promise<void> {
        throw new Error("Method not implemented.");
    }
    //implementar los metodos de la interfaz de repositorio de la base de datos y mapearlos a los metodos de la interfaz de repositorio del dominio
}