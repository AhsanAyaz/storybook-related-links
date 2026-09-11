import { definePreviewAddon } from "storybook/internal/csf";
import type { RelatedLinksTypes } from "./types";

/**
 * CSF Factories entry point. Users on CSF Next add this to their preview so the
 * `relatedLinks` parameter is typed:
 *
 *     import relatedLinks from 'storybook-addon-related-links/preview';
 *     export default definePreview({ addons: [relatedLinks()] });
 */
export default () => definePreviewAddon<RelatedLinksTypes>({});
