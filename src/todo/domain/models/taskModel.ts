export class TaskModel {
  id: number;
  title: string;
  description: string;
  statusId: number;
  createdAt: Date;
  updatedAt: Date;

  constructor(
    id: number,
    title: string,
    description: string,
    statusId: number,
    createdAt: Date,
    updatedAt: Date,
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.statusId = statusId;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}
