import { Injectable } from '@nestjs/common';
import { ICommonsCRUD } from '../commons/ICommonsCRUD';
import { StatusModel } from '../models/status';


export interface IStatusRepositoryPort extends ICommonsCRUD<
  StatusModel,
  number
> {
  findAll(): Promise<StatusModel[]>;
  getStatusByName(name: string): Promise<StatusModel | null>;
}
