import { styled } from "@stitches";

export const InputText = styled("input", {
  borderWidth: "3px",
  borderStyle: "$solid",
  display: "block",
  borderRadius: "$xl",
  fontFamily: "$headline",
  resize: "none",
  padding: "6px 12px",
  variants: {
    color: {
      primary: {
        color: "$primary12",
        background: "$primary2",
        borderColor: "$primary7",
        "&:focus": {
          borderColor: "$primary8",
          outline: "none",
        },
        "&::placeholder": {
          color: "$primary12",
        },
      },
      neutral: {
        color: "$neutral12",
        background: "$neutral2",
        borderColor: "$neutral7",
        "&:focus": {
          borderColor: "$neutral8",
          outline: "none",
        },
        "&::placeholder": {
          color: "$neutral12",
        },
      },
    },
    width: {
      full: {
        width: "$full",
      },
    },
  },
  defaultVariants: {
    color: "neutral",
  },
});
