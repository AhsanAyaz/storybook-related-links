import React from "react";
import { styled } from "storybook/theming";
import { EmptyTabContent, Link } from "storybook/internal/components";
import type { RelatedLinksSection } from "../types";

const Wrapper = styled.div(({ theme }) => ({
  background: theme.background.content,
  padding: "16px 20px 24px",
  boxSizing: "border-box",
  fontSize: theme.typography.size.s2,
  color: theme.color.defaultText,
}));

const Section = styled.section({
  "& + &": {
    marginTop: 24,
  },
});

const SectionTitle = styled.h3(({ theme }) => ({
  margin: "0 0 4px",
  fontSize: theme.typography.size.s2,
  fontWeight: theme.typography.weight.bold,
}));

const SectionDescription = styled.p(({ theme }) => ({
  margin: "0 0 8px",
  color: theme.color.mediumdark,
}));

const List = styled.ul(({ theme }) => ({
  listStyle: "none",
  margin: 0,
  padding: 0,
  borderTop: `1px solid ${theme.appBorderColor}`,
}));

const ListItem = styled.li(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  padding: "8px 0",
  borderBottom: `1px solid ${theme.appBorderColor}`,
}));

const Description = styled.p(({ theme }) => ({
  margin: "4px 0 0",
  color: theme.color.mediumdark,
}));

const Summary = styled.summary({
  cursor: "pointer",
});

export interface RelatedLinksProps {
  sections: RelatedLinksSection[];
}

export const RelatedLinks: React.FC<RelatedLinksProps> = ({ sections }) => {
  if (!sections?.length) {
    return (
      <EmptyTabContent
        title="No related links"
        description="Add a relatedLinks parameter to this story to show links here."
        footer={
          <Link
            href="https://github.com/AhsanAyaz/storybook-related-links#usage"
            target="_blank"
            rel="noreferrer"
            withArrow
          >
            Read the usage docs
          </Link>
        }
      />
    );
  }

  return (
    <Wrapper>
      {sections.map((section, index) => (
        <Section key={section.title ?? index}>
          {section.title && <SectionTitle>{section.title}</SectionTitle>}
          {section.description && (
            <SectionDescription>{section.description}</SectionDescription>
          )}
          <List>
            {section.links.map((link) => (
              <ListItem key={link.url}>
                {link.description ? (
                  <details>
                    <Summary>
                      <Link href={link.url} target="_blank" rel="noreferrer">
                        {link.text}
                      </Link>
                    </Summary>
                    <Description>{link.description}</Description>
                  </details>
                ) : (
                  <Link href={link.url} target="_blank" rel="noreferrer">
                    {link.text}
                  </Link>
                )}
              </ListItem>
            ))}
          </List>
        </Section>
      ))}
    </Wrapper>
  );
};
