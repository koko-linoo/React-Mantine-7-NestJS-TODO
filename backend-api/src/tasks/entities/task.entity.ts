import { $Enums, Task } from '@prisma/client';

export class TaskEntity implements Task {
  id: string;
  name: string;
  status: $Enums.Status;
  schedule: Date;
  createdAt: Date;
  updatedAt: Date;
}
