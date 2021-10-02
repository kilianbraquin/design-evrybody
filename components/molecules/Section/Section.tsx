import { Text } from "@components/atoms";
import { CSS, IntrinsicElementsKeys, styled } from "@stitches";
import { FC } from "react";

export const SectionContainer = styled("section", {
  [`& > * + *`]: {
    marginTop: "$12",
  },
});

export type SectionProps = {
  css?: CSS;
  title?: string;
  titleAs?: IntrinsicElementsKeys;
};

export const Section: FC<SectionProps> = ({
  children,
  css,
  title = "",
  titleAs = "h2",
}) => {
  return (
    <SectionContainer css={css}>
      <Text as={titleAs} align="center" type="title">
        {title}
      </Text>
      {children}
    </SectionContainer>
  );
};
