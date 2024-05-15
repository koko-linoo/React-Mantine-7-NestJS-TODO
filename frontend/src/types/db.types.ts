export {};

declare global {
  export type ApiResponse<T> = {
    data: T;
    message: string;
    status: string;
  };

  export type ApiListResponse<T> = {
    data: T[];
    total: number;
    message: string;
    status: string;
  };

  export type TaskType = "normal" | "schedule";

  export type Tasks = {
    id?: string;
    name?: string;
    description?: string;
    status?: "complete" | "incomplete";
    schedule?: Date;
  };
}
