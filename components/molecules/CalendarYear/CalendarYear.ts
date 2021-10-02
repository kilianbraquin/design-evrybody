import { styled } from "@stitches";

export const CalendarYear = styled("div", {
  position: "relative",
  "& > .label": {
    fontFamily: "$headline",
    color: "$primary11",
    fontSize: "$xl",
    fontWeight: "bold",
  },
});
