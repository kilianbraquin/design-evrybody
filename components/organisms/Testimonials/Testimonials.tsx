import { Link, Text } from "@components/atoms";
import { TestimonialDTO } from "@dto";
import { ArrowRight } from "@icons/solid";
import { styled } from "@stitches";
import { FC } from "react";

export const TestimonialCard = styled("div", {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  padding: "$8 $12",
  "& p": {
    marginBottom: "auto",
  },
  "& span": {
    display: "block",
  },
  "@md": {
    width: "50%",
  },
});

export const TestimonialsContainer = styled("div", {
  display: "flex",
  flexWrap: "wrap",

  background: "$neutral2",
  borderColor: "$neutral7",
  borderWidth: "$3",
  borderStyle: "$solid",
  borderRadius: "$xl",
  mx: "auto",
  maxWidth: "$384",

  [`& > ${TestimonialCard} + ${TestimonialCard}`]: {
    borderColor: "$neutral7",
    borderTopWidth: "$3",
    borderStyle: "$solid",
  },
  "& .link": {
    borderColor: "$neutral7",
    borderTopWidth: "$3",
    borderStyle: "$solid",

    color: "$primary11",
    fontFamily: "$headline",
    fontWeight: "$bold",

    flexBasis: "100%",
    textAlign: "center",

    padding: "$8",
  },
  "@md": {
    maxWidth: "$768",
    [`& > ${TestimonialCard} + ${TestimonialCard}`]: {
      borderLeftWidth: "$3",
      borderTopWidth: "$0",
    },
  },
});

export type TestimonialsProps = {
  testimonials: TestimonialDTO[];
};

export const Testimonials: FC<TestimonialsProps> = ({ testimonials }) => {
  return (
    <TestimonialsContainer>
      {testimonials.map(
        ({ content, description, firstname, lastname }, index) => (
          <TestimonialCard key={index}>
            <Text as="p">{content}</Text>
            <Text
              as="span"
              css={{ color: "$neutral12", marginTop: "$8" }}
              family="headline"
              weight="bold"
            >{`${firstname} ${lastname}`}</Text>
            <Text css={{ color: "$neutral11" }} as="span">
              {description}
            </Text>
          </TestimonialCard>
        )
      )}
      <Link className="link">
        <Text as="span">Voir tous les témoignages</Text>
        <ArrowRight css={{ marginLeft: "$8" }} size={16} />
      </Link>
    </TestimonialsContainer>
  );
};
