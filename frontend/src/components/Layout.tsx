import { menu } from "@/configs/menus";
import { Box, Flex, Paper, Stack } from "@mantine/core";
import { Outlet } from "react-router-dom";
import { MenuItem } from "./MenuItem";

export function Layout() {
  return (
    <Flex p="16px" miw="100vw">
      <Paper w="300px" p="16px" h="calc(100vh - 32px)" shadow="md">
        <Stack>
          {menu.map((x) => (
            <MenuItem {...x} />
          ))}
        </Stack>
      </Paper>
      <Box p="16px">
        <Outlet />
      </Box>
    </Flex>
  );
}
