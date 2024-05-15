import { useDeleteTask, useUpdateTask } from "@/services/query";
import { ActionIcon, Button, Group, Paper, Stack, Text } from "@mantine/core";
import { IconTrash } from "@tabler/icons-react";
import { EditTaskModal } from "./EditTaskModal";

type TaskItemProps = {
  data: Tasks;
  type?: TaskType;
};

export function TaskItem({ data, type = "normal" }: TaskItemProps) {
  const { mutate: DeleteTask, isPending: isDeleting } = useDeleteTask();
  const { mutate: UpdateTask, isPending: isUpdating } = useUpdateTask();

  return (
    <Paper p="16px">
      <Group justify="space-between">
        <Stack>
          <Text
            fw="bold"
            td={data.status === "complete" ? "line-through" : undefined}
          >
            {data.name}
          </Text>
          <Text
            fz="sm"
            td={data.status === "complete" ? "line-through" : undefined}
          >
            {data?.description?.length ? data?.description : "-"}
          </Text>
        </Stack>
        <Group gap="16px">
          {data.status === "incomplete" && type === "normal" && (
            <Button
              loading={isUpdating}
              size="xs"
              onClick={() =>
                UpdateTask({
                  ...data,
                  status: "complete",
                })
              }
            >
              Done
            </Button>
          )}
          {data.status === "incomplete" && (
            <EditTaskModal data={data} type={type} />
          )}
          <ActionIcon
            loading={isDeleting}
            variant="light"
            size="lg"
            color="red"
            onClick={() => DeleteTask(data.id)}
          >
            <IconTrash />
          </ActionIcon>
        </Group>
      </Group>
    </Paper>
  );
}
