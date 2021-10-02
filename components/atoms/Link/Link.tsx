import { Text } from "@components/atoms";
import { CSS, VariantProps } from "@stitches";
import NextLink from "next/link";

type LinkProps = VariantProps<typeof Text> & {
  css?: CSS;
  href?: string;
};

export const Link: React.FC<LinkProps> = ({
  href = "#",
  children,
  ...props
}) => {
  return (
    <NextLink href={href}>
      <Text as="a" cursor="pointer" {...props}>
        {children}
      </Text>
    </NextLink>
  );
};
