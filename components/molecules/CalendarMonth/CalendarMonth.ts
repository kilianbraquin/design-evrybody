import { styled } from "@stitches";

export const CalendarMonth = styled("div", {
  position: "relative",
  "& > .label": {
    fontFamily: "$headline",
    fontWeight: "bold",
    "&::first-letter": {
      textTransform: "uppercase",
    },
  },
});
