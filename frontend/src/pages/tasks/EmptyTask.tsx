import { Center, Paper, Stack, Text } from "@mantine/core";
import { FormAddModal } from "./FormModal";

export function EmptyTask() {
  return (
    <Paper p="16px">
      <Center mih={300}>
        <Stack gap="16px" align="center">
          <Text size="lg" fw="bold">
            Empty Tasks
          </Text>
          <Text size="sm">You have not created tasks for today.</Text>
          <Text size="sm">Tap button to add now</Text>
          <FormAddModal />
        </Stack>
      </Center>
    </Paper>
  );
}
