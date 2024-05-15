import { TaskItem } from "@/components/common/TaskItem";
import { LoadingOverlay, ScrollArea, Stack, Text } from "@mantine/core";
import { useEffect, useState } from "react";
import { useTasks } from "../../services/query";
import { EmptyTask } from "./EmptyTask";
import { ToolBar } from "./Toolbar";

export function Tasks() {
  const { data, isLoading } = useTasks({
    tody: new Date(),
  });

  const [pending, setPending] = useState<Tasks[]>([]);
  const [completed, setCompleted] = useState<Tasks[]>([]);

  useEffect(() => {
    if (data?.data) {
      setPending(data.data.filter((x) => x.status === "incomplete"));
      setCompleted(data.data.filter((x) => x.status === "complete"));
    }
  }, [data]);

  return (
    <Stack gap="16px" pos="relative">
      {<ToolBar />}
      <LoadingOverlay visible={isLoading} />

      <ScrollArea h="calc(100vh - 128px)">
        <Stack>
          {!isLoading && pending.length ? (
            pending.map((x) => <TaskItem key={x.id} data={x} />)
          ) : (
            <EmptyTask />
          )}

          {!isLoading && completed.length ? (
            <>
              <Text fw="bold">Completed Tasks</Text>
              {completed.map((x) => (
                <TaskItem key={x.id} data={x} />
              ))}
            </>
          ) : null}
        </Stack>
      </ScrollArea>
    </Stack>
  );
}
