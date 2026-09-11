import { fileURLToPath } from "node:url";

/**
 * Node-side preset. Registers the manager UI and the preview annotations that
 * ship with this addon.
 */
const resolve = (specifier: string) =>
  fileURLToPath(import.meta.resolve(specifier));

export const managerEntries = (entry: string[] = []) => [
  ...entry,
  resolve("./manager.js"),
];

export const previewAnnotations = (entry: string[] = []) => [
  ...entry,
  resolve("./preview.js"),
];
