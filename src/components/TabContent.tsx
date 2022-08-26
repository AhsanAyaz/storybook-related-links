import React from "react";
import { styled } from "@storybook/theming";
import { Title, Source, Link } from "@storybook/components";
import { accent1, gray5 } from "../cssVariables";

const TabWrapper = styled.div(({ theme }) => ({
  background: theme.background.content,
  padding: "4rem 20px",
  minHeight: "100vh",
  boxSizing: "border-box",
}));

const TabInner = styled.div({
  maxWidth: 768,
  marginLeft: "auto",
  marginRight: "auto",
});

const List = styled.ul`
  list-style: none;
  padding: 0px 20px;
  background-color: #fff;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top: 3px solid ${accent1};
  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.16);
`;

const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  padding: 10px 0px;
  border-top: 1px solid ${gray5};
  :first-of-type {
    border-top: none;
  }
`;

const Section = styled.div`
  margin-top: 30px;
`;

interface IRLink {
  text: string;
  url: string;
  description?: string;
}

interface IRLSection {
  title?: string;
  description?: string;
  links: IRLink[];
}

export interface TabContentProps {
  sections: IRLSection[];
}

export const TabContent: React.FC<TabContentProps> = ({ sections }) => {
  return (
    <TabWrapper>
      <TabInner>
        {!sections?.length ? (
          <>
            <Title style={{ fontWeight: "bold" }}>No links to show</Title>
            <div>
              You can add related links by adding the parameters to your
              stories.{" "}
              <div>
                <Link
                  target="_blank"
                  href="https://github.com/AhsanAyaz/storybook-related-links#usage"
                >
                  Read the usage here
                </Link>
              </div>
            </div>
          </>
        ) : (
          <>
            <Title>Related Links</Title>
            <div>
              {sections.map((section) => (
                <Section key={section.title}>
                  <h3>{section.title}</h3>
                  {section.description && <p>{section.description}</p>}
                  <List>
                    {section.links.map((link) => (
                      <ListItem key={link.url}>
                        {
                          !link.description ? <Link style={{paddingLeft: '14px'}} href={link.url} target="_blank">
                          {link.text}
                        </Link> : <details>
                          <summary>
                          <Link href={link.url} target="_blank">
                            {link.text}
                          </Link>
                          </summary>
                          <p>{link.description}</p>
                        </details>
                        }
                      </ListItem>
                    ))}
                  </List>
                </Section>
              ))}
            </div>
          </>
        )}
      </TabInner>
    </TabWrapper>
  );
};
