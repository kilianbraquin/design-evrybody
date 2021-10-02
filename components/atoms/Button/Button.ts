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
      primary: {},
    },
    style: {
      default: {
        color: "$loContrast",
      },
      border: {
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
  ],
  defaultVariants: {
    color: "primary",
    style: "default",
  },
});
