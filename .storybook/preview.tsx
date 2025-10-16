import React from "react";
import { useDarkMode } from "storybook-dark-mode";
import { themes } from "@storybook/theming";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyle } from "../src/lib";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/i,
    },
  },
  status: {
    statuses: {
      released: {
        background: "#0000ff",
        color: "#ffffff",
        description: "This component is stable and released",
      },
    },
  },
  darkMode: {
    // Настройки темы интерфейса Storybook
    dark: { ...themes.dark, 
		appBg: "#1e1e1e",
		appContentBG: "#1e1e1e",
		barBg: "#2c2c2c",
	},
    light: { ...themes.light,
		appBg: "#ffffff",
		appContentBG: "#ffffff",
		barBg: "#f5f5f5",
	},
    stylePreview: true, // ← синхронизация Canvas
  },
};

export const decorators = [
  (Story) => {
    const isDark = useDarkMode();

    const bgColor = isDark ? "#1e1e1e" : "#ffffff";
    document.body.style.background = bgColor;

    const iframe = document.querySelector<HTMLIFrameElement>(
      "#storybook-preview-iframe"
    );
    if (iframe?.contentDocument?.body) {
      iframe.contentDocument.body.style.background = bgColor;
    }

    return (
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <GlobalStyle />
        <Story />
      </ThemeProvider>
    );
  },
];