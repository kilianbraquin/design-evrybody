import { Text } from "@components/atoms";
import { CSS, IntrinsicElementsKeys, styled } from "@stitches";
import { FC, PropsWithChildren } from "react";

export const SectionContainer = styled("section", {
  [`& > * + *`]: {
    marginTop: "$12",
  },
});

export type SectionProps = PropsWithChildren<{
  css?: CSS;
  id?: string;
  title?: string;
  titleAs?: IntrinsicElementsKeys;
}>;

export const Section: FC<SectionProps> = ({
  children,
  css,
  id,
  title = "",
  titleAs = "h2",
}) => {
  return (
    <SectionContainer id={id} css={css}>
      <Text as={titleAs} align="center" type="title">
        {title}
      </Text>
      {children}
    </SectionContainer>
  );
};
