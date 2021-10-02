import { Text } from "@components/atoms";
import { styled } from "@stitches";
import { FC } from "react";

const Card = styled("div", {
  borderColor: "$neutral7",
  borderWidth: "$3",
  borderStyle: "$solid",
  width: "$full",
  maxWidth: "$512",
  borderRadius: "$xl",
  background: "$neutral2",
  overflow: "hidden",
  padding: "$12 $16",
});

const BottomCard = styled("div", {
  position: "relative",
  marginTop: "$16",
  paddingTop: "$16",
  "& > *": {
    display: "block",
  },
  "&::before": {
    position: "absolute",
    content: '""',
    top: "$0",
    right: "$0",
    backgroundColor: "$neutral9",
    width: "50%",
    height: "$2",
  },
});

export const TestimonialCard: FC = () => {
  return (
    <Card>
      <Text as="p">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam egestas
        tincidunt mi, vel bibendum ante bibendum nec. Etiam ligula leo, dictum
        ac pretium suscipit, sollicitudin vel est. Ut et massa a justo accumsan
        eleifend.
      </Text>
      <BottomCard>
        <Text
          as="span"
          css={{ color: "$neutral12" }}
          align="right"
          family="headline"
          weight="bold"
        >
          Tilly Guibord
        </Text>
        <Text as="span" css={{ color: "$neutral11" }} align="right">
          Promo 2017
        </Text>
      </BottomCard>
    </Card>
  );
};
