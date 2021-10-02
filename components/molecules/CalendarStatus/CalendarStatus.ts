import { styled } from "@stitches";

export const CalendarStatus = styled("div", {
  borderRadius: "$full",
  borderWidth: "$2",
  borderColor: "$neutral6",
  height: "$16",
  width: "$16",
  position: "relative",
  "& svg": {
    color: "$primary11",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  variants: {
    fill: {
      false: {
        backgroundColor: "$neutral2",
      },
      true: {
        backgroundColor: "$primary9",
      },
    },
  },
  defaultVariants: {
    fill: false,
  },
});
