import React from "react";
import { useParameter } from "@storybook/api";
import { PARAM_KEY } from "./constants";
import { TabContent, TabContentProps } from "./components/TabContent";

interface TabProps {
  active: boolean;
}

export const Tab: React.FC<TabProps> = ({ active }) => {
  // https://storybook.js.org/docs/react/addons/addons-api#useparameter
  const { sections } = useParameter<TabContentProps>(PARAM_KEY, {
    sections: [],
  });

  return active ? <TabContent sections={sections} /> : null;
};
