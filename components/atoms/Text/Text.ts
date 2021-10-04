import { styled } from "@stitches";

export const Text = styled("p", {
  verticalAlign: "middle",
  whiteSpace: "pre-line",

  variants: {
    color: {
      primary: {
        color: "$primary11",
      },
    },
    cursor: {
      pointer: {
        cursor: "pointer",
      },
    },
    decoration: {
      underline: {
        textDecoration: "underline",
      },
      hoverUnderline: {
        [`&:hover`]: {
          textDecoration: "underline",
        },
      },
    },
    textTransform: {
      uppercase: {
        textTransform: "uppercase",
      },
    },
    align: {
      left: {
        textAlign: "left",
      },
      center: {
        textAlign: "center",
      },
      right: {
        textAlign: "right",
      },
    },
    size: {
      lg: {
        fontSize: "$lg",
      },
      xl: {
        fontSize: "$xl",
      },
    },
    type: {
      simple: {
        fontSize: "$sm",
        fontWeight: "$regular",
        maxWidth: "$512",
        "@sm": {
          fontSize: "$lg",
          maxWidth: "$640",
        },
        "@md": {
          fontSize: "$xl",
          maxWidth: "$768",
        },
      },
      title: {
        color: "$primary11",
        fontFamily: "$headline",
        fontSize: "$2xl",
        fontWeight: "$bold",
      },
    },
    family: {
      headline: {
        fontFamily: "$headline",
      },
      content: {
        fontFamily: "$content",
      },
    },
    weight: {
      bold: {
        fontWeight: "$bold",
      },
    },
    hidden: {
      true: {
        display: "none",
      },
    },
  },
  defaultVariants: {
    align: "left",
    type: "default",
  },
});
