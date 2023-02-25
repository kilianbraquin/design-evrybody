import { Text } from "@components/atoms";
import { CSS, VariantProps } from "@stitches";
import NextLink from "next/link";
import { PropsWithChildren } from "react";

type LinkProps = PropsWithChildren<
  VariantProps<typeof Text> & {
    className?: string;
    css?: CSS;
    href?: string;
    target?: "_blank";
    onClick?: () => void;
    fullWidth?: boolean;
  }
>;

export const Link: React.FC<LinkProps> = ({
  className,
  href = "#",
  children,
  fullWidth,
  ...props
}) => {
  return (
    <NextLink
      href={href}
      passHref
      style={{ width: fullWidth ? "100%" : "initial" }}
    >
      <Text as="span" className={className} cursor="pointer" {...props}>
        {children}
      </Text>
    </NextLink>
  );
};
