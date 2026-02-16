import { ICommonsCRUD } from "src/todo/domain/commons/ICommonsCRUD";
import { StatusEntity } from "../entities/StatusEntity";


export interface IStatusRepositoryDB extends ICommonsCRUD<StatusEntity, number> {
    getStatusByName(name: string): Promise<StatusEntity | null>;
}