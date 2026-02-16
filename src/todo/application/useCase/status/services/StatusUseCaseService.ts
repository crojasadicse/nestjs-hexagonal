import { IStatusUseCasePort } from "../ports/StatusUseCasePort";

import { StatusModel } from "src/todo/domain/models/status";
import { IStatusRepositoryPort } from "src/todo/domain/repository/IStatusResposotyPort";


export class StatusUseCaseService implements IStatusUseCasePort {

  constructor(private readonly statusRepository: IStatusRepositoryPort) {
  }


  async getStatusByName(name: string): Promise<StatusModel | null> {
    return this.statusRepository.getStatusByName(name);
  }

  findAll(): Promise<StatusModel[]> {
    return this.statusRepository.findAll();
  }
  create(item: StatusModel): Promise<StatusModel> {
    throw new Error('Method not implemented.');
  }
  read(id: number): Promise<StatusModel | null> {
    throw new Error('Method not implemented.');
  }
  update(id: number, item: StatusModel): Promise<StatusModel> {
    throw new Error('Method not implemented.');
  }
  delete(id: number): Promise<void> {
    throw new Error('Method not implemented.');
  }



}
