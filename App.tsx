import React from "react";

import { SafeAreaProvider } from "react-native-safe-area-context";
import { ThemeProvider } from "styled-components";

import { Routes } from "./src/routes";
import CryptoProvider from "./src/shared/hooks/useCryptos";
import styledComponentsTheme from "./src/themes/theme";

export default function App() {
  return (
    <ThemeProvider theme={styledComponentsTheme}>
      <CryptoProvider>
        <SafeAreaProvider>
          <Routes />
        </SafeAreaProvider>
      </CryptoProvider>
    </ThemeProvider>
  );
}
