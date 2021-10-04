import { styled } from "@stitches";

export const Overlay = styled("div", {
  position: "fixed",
  inset: "$0",
  backgroundColor: "$overlay",
  zIndex: "$30",
  variants: {
    hidden: {
      true: {
        display: "none",
      },
    },
  },
});
