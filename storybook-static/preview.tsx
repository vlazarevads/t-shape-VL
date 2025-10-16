import { themes } from "@storybook/theming";
import { useDarkMode } from "storybook-dark-mode";
import { ThemeProvider } from "styled-components";
import React from "react";

export const parameters = {
  darkMode: {
    dark: { ...themes.dark, appBg: "#1e1e1e" },
    light: { ...themes.light, appBg: "#ffffff" },
    stylePreview: true,
  },
};

export const decorators = [
  (Story) => {
    const isDark = useDarkMode();
    return (
      <ThemeProvider theme={isDark}>
        <Story />
      </ThemeProvider>
    );
  },
];