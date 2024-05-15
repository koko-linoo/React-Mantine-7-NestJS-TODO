import api from "@/configs/axios";

export function getTasks(params?: Record<string, unknown>) {
  return api.get<ApiListResponse<Tasks>>("/tasks", { params });
}

export function createTask(body: Record<string, unknown>) {
  return api.post("/tasks", body);
}

export function updateTask(id: string, body: Record<string, unknown>) {
  return api.patch(`/tasks/${id}`, body);
}

export function deleteTask(id?: string) {
  return api.delete(`/tasks/${id}`);
}
