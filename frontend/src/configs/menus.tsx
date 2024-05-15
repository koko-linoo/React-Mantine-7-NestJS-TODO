import { MenuItemProps } from "@/components/MenuItem";
import { IconClock, IconList } from "@tabler/icons-react";

export const menu: MenuItemProps[] = [
  {
    icon: <IconList />,
    label: "Today Tasks",
    to: "/",
  },
  {
    icon: <IconClock />,
    label: "Schedule Tasks",
    to: "/schedule-tasks",
  },
];
