import { Page } from './Page';
import * as HeaderStories from './Header.stories';

export default {
  title: "Example/Page",
  component: Page,
  parameters: {
    relatedLinks: {
      sections: [
        {
          title: "Sources",
          description: "Where this page's patterns come from",
          links: [
            {
              text: "Component-driven development",
              url: "https://www.componentdriven.org",
              description:
                "The methodology this example page is built around: start with atomic components, end with pages.",
            },
            {
              text: "Storybook docs: writing stories",
              url: "https://storybook.js.org/docs/writing-stories",
            },
          ],
        },
        {
          title: "Inspirations",
          links: [
            {
              text: "Angular Material",
              url: "https://material.angular.io",
              description: "Angular's port of Google's Material Design.",
            },
            {
              text: "Chromatic",
              url: "https://www.chromatic.com",
            },
          ],
        },
      ],
    },
  },
};

export const LoggedIn = {
  args: {
    ...HeaderStories.LoggedIn.args,
  },
};

export const LoggedOut = {
  args: {
    ...HeaderStories.LoggedOut.args,
  },
};
