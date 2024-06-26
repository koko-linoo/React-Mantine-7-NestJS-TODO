import { AddTaskModal } from "@/components/common/AddTaskModal";
import { Center, Paper, Stack, Text } from "@mantine/core";

export function EmptyTask() {
  return (
    <Paper p="16px">
      <Center mih={250}>
        <Stack gap="16px" align="center">
          <Text size="lg" fw="bold">
            No Pending Tasks
          </Text>
          <Text size="sm">You have now new pending tasks for today.</Text>
          <Text size="sm">Tap button to add now</Text>
          <AddTaskModal />
        </Stack>
      </Center>
    </Paper>
  );
}
