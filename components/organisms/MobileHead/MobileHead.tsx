import { Image } from "@components/atoms";
import { Moon, Sun } from "@icons/regular";
import { Bars } from "@icons/solid";
import { styled } from "@stitches";
import { MenuContext, ThemeContext } from "contexts";
import { FC, useContext, useMemo } from "react";

export const MobileHeadSize = "62px";

export const MobileHeadContainer = styled("div", {
  position: "absolute",
  top: 0,
  height: MobileHeadSize,
  width: "100vw",

  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  [`& > div`]: {
    marginTop: "-$2!important",
  },
  [`& .toggle-menu, & .toggle-theme`]: {
    cursor: "pointer",
    color: "$loContrast",
    marginTop: "-$1",
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
  },
  [`& .toggle-menu`]: {
    left: "$12",
  },
  [`& .toggle-theme`]: {
    right: "$12",
  },
  "@lg": {
    display: "none",
  },
});

export const MobileHead: FC = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const { setActiveMenu } = useContext(MenuContext);

  const ThemeIcon = useMemo(() => (theme === "light" ? Moon : Sun), [theme]);

  return (
    <MobileHeadContainer onClick={() => setActiveMenu(false)}>
      <Bars
        className="toggle-menu"
        size={30}
        onClick={(e) => {
          setActiveMenu((value) => !value);
          e.stopPropagation();
        }}
      />
      <Image
        src={`/bde/logowebbde_${theme}_new.png`}
        height={36}
        width={192}
        alt="Texte contenant EvryBody"
        priority
      />
      <ThemeIcon
        className="toggle-theme"
        size={30}
        onClick={() =>
          setTheme((value) => (value === "light" ? "dark" : "light"))
        }
      />
    </MobileHeadContainer>
  );
};
