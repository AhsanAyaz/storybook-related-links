import { Button } from "./Button";

export default {
  title: "Example/Button",
  component: Button,
  parameters: {
    relatedLinks: {
      sections: [
        {
          title: "Sources",
          description: "Where this component came from",
          links: [
            {
              text: "Angular Material",
              url: "https://material.angular.io",
            },
            {
              text: "Storybook addon API",
              url: "https://storybook.js.org/docs/addons/addons-api",
            },
          ],
        },
      ],
    },
  },
};

export const Primary = {
  args: {
    primary: true,
    label: "Button",
  },
};

export const Secondary = {
  args: {
    label: "Button",
  },
};

export const Large = {
  args: {
    size: "large",
    label: "Button",
  },
};

export const Small = {
  args: {
    size: "small",
    label: "Button",
  },
  parameters: {
    relatedLinks: {
      sections: [
        {
          title: "Links to study",
          links: [
            {
              text: "Angular Material",
              url: "https://material.angular.io",
              description:
                "This component is highly inspired from Angular Material, an Angular port of Google's Material design.",
            },
          ],
        },
      ],
    },
  },
};
