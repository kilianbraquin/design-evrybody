import { styled } from "@stitches";

export const CalendarEvents = styled("div", {
  position: "relative",
  "& > *": {
    display: "block",
    position: "relative",
  },
  "& > * + *": {
    marginTop: "$2",
  },
});
