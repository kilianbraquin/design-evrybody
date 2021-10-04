import { List, ListItem, SocialItem, SocialItemProps } from "@components/atoms";
import { Discord, Facebook, Instagram } from "@icons/brand";
import { CSS } from "@stitches";
import { FC } from "react";

const links = [
  { Icon: Facebook, href: "https://www.facebook.com/EvryBodyMiage" },
  { Icon: Instagram, href: "https://www.instagram.com/evrybody_miage" },
  { Icon: Discord, href: "https://discord.gg/W55yuxNjYS" },
];

export type SocialListProps = {
  color?: SocialItemProps["color"];
  css?: CSS;
};

export const SocialList: FC<SocialListProps> = ({ color, ...props }) => {
  return (
    <List space="spaceX2" {...props}>
      {links.map((props, index) => (
        <ListItem key={index}>
          <SocialItem color={color} {...props} />
        </ListItem>
      ))}
    </List>
  );
};
