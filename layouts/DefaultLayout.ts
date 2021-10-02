import { Main } from "@components/atoms";
import {
  MenuHeader,
  MenuWidth,
  MobileHeadContainer,
} from "@components/organisms";
import { styled } from "@stitches";

export const DefaultLayout = styled("div", {
  overflowX: "hidden",
  maxWidth: "$w-screen",

  [`& ${MenuHeader}, & ${Main}, & ${MobileHeadContainer}`]: {
    transitionProperty: "left",
    transitionDuration: "1s",
  },
  [`& ${MenuHeader}`]: {
    position: "fixed",
    top: 0,
  },
  [`& ${Main}`]: {
    position: "relative",
  },
  "@lg": {
    display: "flex",
    paddingLeft: MenuWidth,
    [`& ${Main}`]: {
      position: "static",
      flex: 1,
    },
  },
  variants: {
    navActive: {
      true: {
        [`& ${MenuHeader}`]: {
          left: 0,
        },
        [`& ${Main}, & ${MobileHeadContainer}`]: {
          left: MenuWidth,
        },
      },
      false: {
        [`& ${MenuHeader}`]: {
          left: `-${MenuWidth}`,
          "@lg": {
            left: 0,
          },
        },
        [`& ${Main}, & ${MobileHeadContainer}`]: {
          left: "0",
        },
      },
    },
  },
  defaultVariants: {
    navActive: "false",
  },
});
