import { TaskItem } from "@/components/common/TaskItem";
import { useTasks } from "@/services/query";
import { LoadingOverlay, ScrollArea, Stack } from "@mantine/core";
import { EmptyTask } from "./EmptyTask";
import { ToolBar } from "./Toolbar";

export function ScheduleTasks() {
  const { data, isLoading } = useTasks();

  return (
    <Stack gap="16px" pos="relative">
      {<ToolBar />}
      <LoadingOverlay visible={isLoading} />

      <ScrollArea h="calc(100vh - 128px)">
        <Stack gap="16px">
          {data?.data?.length ? (
            data?.data.map((x) => (
              <TaskItem key={x.id} data={x} type="schedule" />
            ))
          ) : (
            <EmptyTask />
          )}
        </Stack>
      </ScrollArea>
    </Stack>
  );
}
