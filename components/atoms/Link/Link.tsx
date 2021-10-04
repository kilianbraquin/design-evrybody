import { Text } from "@components/atoms";
import { CSS, VariantProps } from "@stitches";
import NextLink from "next/link";

type LinkProps = VariantProps<typeof Text> & {
  className?: string;
  css?: CSS;
  href?: string;
  target?: "_blank";
};

export const Link: React.FC<LinkProps> = ({
  className,
  href = "#",
  children,
  ...props
}) => {
  return (
    <NextLink href={href} passHref>
      <Text as="a" className={className} cursor="pointer" {...props}>
        {children}
      </Text>
    </NextLink>
  );
};
