import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../stories/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["storybook-addon-related-links"],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
};

export default config;
