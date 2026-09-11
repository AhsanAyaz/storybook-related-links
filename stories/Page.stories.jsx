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
          description: 'These are picked with love',
          links: [
            {
              text: "Angular Material",
              url: "https://material.angular.io",
              description: "Imported from Angular Material",
            },
            {
              text: "Angular Material",
              url: "https://material.angular.io",
            },
            {
              text: "Angular Material",
              url: "https://material.angular.io",
            },
            {
              text: "Angular Material",
              url: "https://material.angular.io",
            },
          ],
        },
        {
          title: "Inspirations",
          links: [
            {
              text: "Angular Material",
              url: "https://material.angular.io",
              description: "Imported from Angular Material",
            },
            {
              text: "Angular Material",
              url: "https://material.angular.io",
            },
            {
              text: "Angular Material",
              url: "https://material.angular.io",
            },
            {
              text: "Angular Material",
              url: "https://material.angular.io",
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
