import { fileURLToPath } from "node:url";
import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../stories/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [fileURLToPath(import.meta.resolve("../dist/preset.js"))],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
};

export default config;
