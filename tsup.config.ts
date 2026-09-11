import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts", "src/manager.tsx", "src/preview.ts"],
  format: ["esm"],
  dts: true,
  clean: true,
  sourcemap: true,
  treeshake: true,
  splitting: false,
  target: "node20",
  external: [/^react($|\/)/, /^react-dom($|\/)/, /^storybook($|\/)/, "@storybook/icons"],
});
