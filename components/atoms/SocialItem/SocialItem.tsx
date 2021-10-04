import { Link } from "@components/atoms";
import { IconProps, SVGIcon } from "@icons/Base";
import { VariantProps } from "@stitches";
import { FC } from "react";

export type SocialItemProps = {
  href?: string;
  Icon: FC<IconProps>;
  size?: number;
  color?: VariantProps<typeof SVGIcon>["color"];
};

export const SocialItem: FC<SocialItemProps> = ({
  color = "primary",
  href,
  Icon,
  size = 32,
}) => {
  return (
    <Link href={href} target="_blank">
      <Icon size={size} cursor="pointer" color={color} />
    </Link>
  );
};
