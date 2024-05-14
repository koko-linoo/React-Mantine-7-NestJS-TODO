// css
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import "./index.css";

// react
import React from "react";
import ReactDOM from "react-dom/client";

// mantine
import { MantineProvider } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import { RouterProvider } from "react-router-dom";

// configs
import { routes } from "./configs/routes";
import { theme } from "./configs/theme";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MantineProvider theme={theme}>
      <ModalsProvider>
        <RouterProvider router={routes} />
      </ModalsProvider>
    </MantineProvider>
  </React.StrictMode>
);
