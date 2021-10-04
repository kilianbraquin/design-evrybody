import { styled } from "@stitches";

export const Button = styled("button", {
  display: "block",
  width: "$max",
  fontFamily: "$headline",
  padding: "7px 15px",
  borderRadius: "$base",
  fontWeight: "bold",
  variants: {
    color: {
      neutral: {},
      primary: {},
    },
    style: {
      default: {
        color: "$loContrast",
      },
      border: {
        borderStyle: "$solid",
        borderWidth: "$2",
      },
    },
  },
  compoundVariants: [
    {
      color: "primary",
      style: "default",
      css: {
        backgroundColor: "$primary9",
        "&:hover": {
          backgroundColor: "$primary10",
        },
      },
    },
    {
      color: "primary",
      style: "border",
      css: {
        backgroundColor: "$neutral2",
        borderColor: "$primary7",
        color: "$primary11",
        "&:hover": {
          borderColor: "$primary8",
        },
      },
    },
    {
      color: "neutral",
      style: "default",
      css: {
        backgroundColor: "$neutral9",
        "&:hover": {
          backgroundColor: "$neutral10",
        },
      },
    },
    {
      color: "neutral",
      style: "border",
      css: {
        backgroundColor: "$neutral2",
        borderColor: "$neutral7",
        color: "$neutral11",
        "&:hover": {
          borderColor: "$neutral8",
        },
      },
    },
  ],
  defaultVariants: {
    color: "primary",
    style: "default",
  },
});
