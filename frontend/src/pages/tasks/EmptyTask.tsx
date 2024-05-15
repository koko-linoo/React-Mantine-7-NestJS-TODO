import { Center, Flex, Paper, Text } from "@mantine/core";
import { FormAddModal } from "./FormModal";

export function EmptyTask() {
  return (
    <Paper p="16px">
      <Center mih={300}>
        <Flex gap="16px">
          <Text>Empty Tasks</Text>
          <FormAddModal />
        </Flex>
      </Center>
    </Paper>
  );
}
