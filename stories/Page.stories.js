import React from 'react';

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

const Template = (args) => <Page {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  ...HeaderStories.LoggedIn.args,
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  ...HeaderStories.LoggedOut.args,
};
