import { Group, Text } from "@mantine/core";
import { FormAddModal } from "./FormModal";

export function ToolBar() {
  return (
    <Group justify="space-between">
      <Text>Tasks</Text>
      <FormAddModal />
    </Group>
  );
}
