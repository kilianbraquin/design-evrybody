import { styled } from "@stitches";

export const InputText = styled("input", {
  background: "$neutral2",
  borderColor: "$neutral7",
  borderWidth: "3px",
  borderStyle: "$solid",
  color: "$neutral12",
  display: "block",
  borderRadius: "$xl",
  fontFamily: "$headline",
  resize: "none",
  padding: "6px 12px",
  "&:focus": {
    borderColor: "$neutral8",
    outline: "none",
  },
  "&::placeholder": {
    color: "$neutral12",
  },
});
