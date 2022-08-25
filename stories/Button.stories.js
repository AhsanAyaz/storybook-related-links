import React from "react";
import { Button } from "./Button";

export default {
  title: "Example/Button",
  component: Button,
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
      ],
    },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Button",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "Button",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "Button",
};

Small.parameters = {
  relatedLinks: {
    sections: [
      {
        title: "Links to study",
        links: [
          {
            text: "Angular Material",
            url: "https://material.angular.io",
            description: "Imported from Angular Material",
          },
        ],
      },
    ],
  },
};
