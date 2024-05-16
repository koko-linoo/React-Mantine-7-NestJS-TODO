import { TaskItem } from "@/components/common/TaskItem";
import { useTasks } from "@/services/query";
import {
  Divider,
  LoadingOverlay,
  ScrollArea,
  Stack,
  Text,
} from "@mantine/core";
import { EmptyTask } from "./EmptyTask";
import { ToolBar } from "./Toolbar";
import { useGroupTasks } from "./hook";

export function ScheduleTasks() {
  const { data, isLoading } = useTasks();

  const result = useGroupTasks(data?.data ?? []);

  return (
    <Stack gap="16px" pos="relative">
      {<ToolBar />}
      <LoadingOverlay visible={isLoading} />

      <ScrollArea h="calc(100vh - 128px)">
        <Stack gap="16px">
          {Object.keys(result).length ? (
            <Stack gap="16px">
              {Object.entries(result).map(([date, tasks]) => (
                <Stack gap="16px" key={date}>
                  <Text fs="italic" fw="bold">
                    {date}
                  </Text>
                  {tasks.map((task) => (
                    <TaskItem key={task.id} data={task} type="schedule" />
                  ))}
                  <Divider />
                </Stack>
              ))}
            </Stack>
          ) : (
            <EmptyTask />
          )}
        </Stack>
      </ScrollArea>
    </Stack>
  );
}
