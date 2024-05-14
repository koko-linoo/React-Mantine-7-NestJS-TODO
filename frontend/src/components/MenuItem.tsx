import { NavLink } from "@mantine/core";
import { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";

export type MenuItemProps = {
  icon: ReactNode;
  label: string;
  to: string;
};

export function MenuItem({ icon, label, to }: MenuItemProps) {
  const location = useLocation();
  return (
    <NavLink
      variant="subtle"
      component={Link}
      leftSection={icon}
      label={label}
      to={to}
      active={location.pathname === to}
    />
  );
}
