export interface RelatedLink {
  /** Text shown for the link. */
  text: string;
  /** Destination of the link. */
  url: string;
  /** Optional longer explanation, rendered in a collapsible section. */
  description?: string;
}

export interface RelatedLinksSection {
  title?: string;
  description?: string;
  links: RelatedLink[];
}

export interface RelatedLinksParameters {
  sections: RelatedLinksSection[];
}

/** Parameter types contributed by this addon, for CSF Factories users. */
export interface RelatedLinksTypes {
  parameters: {
    relatedLinks?: RelatedLinksParameters;
  };
}
