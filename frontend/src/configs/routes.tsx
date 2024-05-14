import { Layout } from "@/components/Layout";
import { ScheduleTasks } from "@/pages/schedule-tasks/ScheduleTasks";
import { Tasks } from "@/pages/tasks/Tasks";
import { createBrowserRouter } from "react-router-dom";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Tasks />,
      },
      {
        path: "schedule-tasks",
        element: <ScheduleTasks />,
      },
    ],
  },
]);
