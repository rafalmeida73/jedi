import React from "react";

import { ThemeProvider } from "styled-components";

import { Routes } from "./src/routes";
import styledComponentsTheme from "./src/themes/theme";

export default function App() {
  return (
    <ThemeProvider theme={styledComponentsTheme}>
      <Routes />
    </ThemeProvider>
  );
}
