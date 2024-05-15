import { FormEditModal } from "@/pages/tasks/FormModal";
import { useDeleteTask, useUpdateTask } from "@/pages/tasks/query";
import { ActionIcon, Button, Group, Paper, Stack, Text } from "@mantine/core";
import { IconTrash } from "@tabler/icons-react";

export function TaskItem({ data }: { data: Tasks }) {
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
            {data.description ?? "-"}
          </Text>
        </Stack>
        <Group gap="16px">
          {data.status === "incomplete" && (
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
          {data.status === "incomplete" && <FormEditModal data={data} />}
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
