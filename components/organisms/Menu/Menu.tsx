import { Image, Link, List, ListItem, Text } from "@components/atoms";
import { SocialList } from "@components/molecules";
import { NewsletterContext, ThemeContext } from "@contexts";
import { Moon, Sun } from "@icons/regular";
import { AnglesRight } from "@icons/solid";
import { styled } from "@stitches";
import { FC, useContext } from "react";

export const MenuWidth = "270px";

const links = [
  { label: "Présentation", href: "/#introduction" },
  { label: "Calendrier", href: "/#calendar" },
  { label: "Anciens Étudiants", href: "/#testimonials" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/#contact" },
];

export const MenuHeader = styled("header", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  color: "$loContrast",
  width: MenuWidth,
  paddingTop: "$32",
  paddingBottom: "calc(env(safe-area-inset-bottom, 0) + $16)",
  height: "100vh",
});

export const MenuNav = styled("nav", {
  marginTop: "$32",
  marginBottom: "auto",
  [`& ${List} > ${ListItem} + ${ListItem}`]: {
    marginTop: "$8",
  },
});

export const Menu: FC = () => {
  const { setDisplayNewsletterModal } = useContext(NewsletterContext);
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <MenuHeader>
      <Image
        src="/bde/logofox_short.png"
        height={140}
        width={107}
        alt="Logo du BDE, un renard"
      />
      <MenuNav>
        <List direction="column">
          {links.map(({ href, label }, index) => (
            <ListItem key={index}>
              <Link
                href={href}
                weight="bold"
                family="headline"
                size="lg"
                onClick={() => setDisplayNewsletterModal(false)}
              >
                <AnglesRight
                  css={{ marginRight: "$8", opacity: "0.6" }}
                  size={16}
                />
                <Text as="span">{label}</Text>
              </Link>
            </ListItem>
          ))}
        </List>
      </MenuNav>
      <List hidden={{ "@initial": true, "@lg": false }} space="spaceX2">
        <ListItem>
          <Sun
            cursor="pointer"
            size={32}
            css={{ opacity: theme === "light" ? 1 : 0.3 }}
            onClick={() => setTheme("light")}
          />
        </ListItem>
        <ListItem>
          <Moon
            cursor="pointer"
            size={32}
            css={{ opacity: theme === "dark" ? 1 : 0.3 }}
            onClick={() => setTheme("dark")}
          />
        </ListItem>
      </List>
      <Text
        as="span"
        css={{ marginTop: "$12" }}
        decoration="hoverUnderline"
        cursor="pointer"
        onClick={() => setDisplayNewsletterModal(true)}
      >
        Rejoignez notre newsletter
      </Text>
      <SocialList css={{ marginTop: "$16" }} color="loContrast" />
    </MenuHeader>
  );
};
