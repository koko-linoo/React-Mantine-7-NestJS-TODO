import { useEffect, useState } from "react";

type GroupTask = Record<string, Tasks[]>;

function groupTasksByDate(tasks: Tasks[]): GroupTask {
  return tasks.reduce((acc, task) => {
    if (task.schedule) {
      const date = task.schedule.toString().split("T")[0]; // Extract the date part
      if (!acc[date]) {
        acc[date] = [];
      }
      acc[date].push(task);
    }

    return acc;
  }, {} as GroupTask);
}

export function useGroupTasks(tasks: Tasks[]) {
  const [data, setData] = useState<GroupTask>({});

  useEffect(() => {
    setData(groupTasksByDate(tasks));
  }, [tasks]);

  return data;
}
