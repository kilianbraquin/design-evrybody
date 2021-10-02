import { ListItem } from "@components/atoms";
import { styled } from "@stitches";

export const List = styled("ul", {
  variants: {
    hidden: {
      true: {
        display: "none",
      },
      false: {
        display: "flex",
      },
    },
    direction: {
      column: {
        flexDirection: "column",
      },
      row: {
        flexDirection: "row",
      },
    },
    space: {
      spaceX1: {
        [`& > ${ListItem} + ${ListItem}`]: {
          marginLeft: "$4",
        },
      },
      spaceX2: {
        [`& > ${ListItem} + ${ListItem}`]: {
          marginLeft: "$8",
        },
      },
    },
  },
  defaultVariants: {
    direction: "row",
    hidden: false,
  },
});
