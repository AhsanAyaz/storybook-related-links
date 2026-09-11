import React from "react";
import { addons, types, useParameter } from "storybook/manager-api";
import { AddonPanel } from "storybook/internal/components";
import { ADDON_ID, PANEL_ID, PARAM_KEY } from "./constants";
import { RelatedLinks } from "./components/RelatedLinks";
import type { RelatedLinksParameters } from "./types";

const Panel: React.FC<{ active: boolean }> = ({ active }) => {
  const { sections } = useParameter<RelatedLinksParameters>(PARAM_KEY, {
    sections: [],
  });

  return (
    <AddonPanel active={active}>
      <RelatedLinks sections={sections} />
    </AddonPanel>
  );
};

addons.register(ADDON_ID, () => {
  addons.add(PANEL_ID, {
    type: types.PANEL,
    title: "Related Links",
    match: ({ viewMode }) => viewMode === "story",
    render: ({ active }) => <Panel active={!!active} />,
  });
});
