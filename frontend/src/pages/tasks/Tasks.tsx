import { TaskItem } from "@/components/common/TaskItem";
import { Stack } from "@mantine/core";
import { EmptyTask } from "./EmptyTask";
import { ToolBar } from "./Toolbar";
import { useTasks } from "./query";

export function Tasks() {
  const { data } = useTasks();

  return (
    <Stack gap="16px">
      {<ToolBar />}
      {data?.data?.length ? (
        data?.data.map((x) => <TaskItem key={x.id} data={x} />)
      ) : (
        <EmptyTask />
      )}
    </Stack>
  );
}
