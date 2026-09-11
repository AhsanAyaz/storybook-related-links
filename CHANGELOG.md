# v1.0.0

#### 💥 Breaking changes

- Requires `storybook@^10`. The five `@storybook/*` peer dependencies are gone, and with them the React 16/17-only peer range ([#2](https://github.com/AhsanAyaz/storybook-related-links/issues/2), [#3](https://github.com/AhsanAyaz/storybook-related-links/issues/3)).
- Related links render in the **addon panel** instead of their own tab. Storybook 11 removes the `TAB` addon type, so the `/related-links/:storyId` route is gone. The `relatedLinks` parameter is unchanged.
- The package is ESM-only, as Storybook 10 requires.

#### 🚀 Enhancements

- New `storybook-addon-related-links/preview` entry exporting `definePreviewAddon`, so CSF Factories users get a typed `relatedLinks` parameter.
- `RelatedLink`, `RelatedLinksSection` and `RelatedLinksParameters` are exported for TypeScript users.
- Empty state now explains how to add links instead of rendering a blank panel.

#### 🏠 Internal

- Build moved from Babel to tsup; releases are cut manually and CI only verifies (type check + builds).

#### Authors: 1

- Muhammad Ahsan Ayaz (=)

---

# v0.0.4 (Fri Aug 26 2022)

#### ⚠️ Pushed to `main`

- feat(link-section): add description to section props (=)

#### Authors: 1

- Muhammad Ahsan Ayaz (=)

---

# v0.0.3 (Fri Aug 26 2022)

#### ⚠️ Pushed to `main`

- fix(globalDecorators): remove global decorators (=)

#### Authors: 1

- Muhammad Ahsan Ayaz (=)

---

# v0.0.2 (Thu Aug 25 2022)

#### 🐛 Bug Fix

- feat(related-links): add no-links view [#1](https://github.com/AhsanAyaz/storybook-related-links/pull/1) ([@AhsanAyaz](https://github.com/AhsanAyaz))

#### Authors: 1

- Muhammad Ahsan Ayaz ([@AhsanAyaz](https://github.com/AhsanAyaz))

---

# v0.0.1 (Thu Aug 25 2022)

#### ⚠️ Pushed to `main`

- feat(tab-content): add related links addon as tab � ([@AhsanAyaz](https://github.com/AhsanAyaz))
- project setup ([@AhsanAyaz](https://github.com/AhsanAyaz))
- Initial commit ([@AhsanAyaz](https://github.com/AhsanAyaz))

#### Authors: 1

- Muhammad Ahsan Ayaz ([@AhsanAyaz](https://github.com/AhsanAyaz))
