import { createTask, deleteTask, getTasks, updateTask } from "@/services/tasks";
import { notifications } from "@mantine/notifications";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export function useTasks() {
  return useQuery({
    queryKey: ["tasks"],
    queryFn: () => getTasks(),
    select: (response) => response.data,
  });
}

export function useCreateTask() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Partial<Tasks>) => createTask(data),
    onError: () => {
      notifications.show({
        color: "red",
        title: "Error",
        message: "Something is wrong when add new task!!",
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
      notifications.show({
        title: "Success",
        message: "New Task Added!",
      });
    },
  });
}

export function useUpdateTask() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, ...data }: Partial<Tasks>) => updateTask(id!, data),
    onError: () => {
      notifications.show({
        color: "red",
        title: "Error",
        message: "Something is wrong when update task!!",
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
      notifications.show({
        title: "Success",
        message: "New Task Updated!",
      });
    },
  });
}

export function useDeleteTask() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id?: string) => deleteTask(id),
    onError: () => {
      notifications.show({
        color: "red",
        title: "Error",
        message: "Something is wrong when delete task!!",
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
      notifications.show({
        title: "Success",
        message: "Successfully deleted!",
      });
    },
  });
}
