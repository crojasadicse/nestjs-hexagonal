import { ICommonsCRUD } from "src/todo/domain/commons/ICommonsCRUD";
import { StatusModel } from "src/todo/domain/models/status";


export interface IStatusUseCasePort extends ICommonsCRUD<StatusModel, number> {
  findAll(): Promise<StatusModel[]>;

  getStatusByName(name: string): Promise<String | null>;
}
