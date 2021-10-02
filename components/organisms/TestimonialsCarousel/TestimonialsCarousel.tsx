import { TestimonialCard } from "@components/molecules";
import { ArrowLeft, ArrowRight } from "@icons/solid";
import { styled } from "@stitches";
import { FC } from "react";

const Carousel = styled("div", {
  mx: "auto",
  maxWidth: "$512",
});

const CarouselButton = styled("div", {
  padding: "$16 $8",
  color: "$primary11",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  ".dots": {
    height: "20px",
  },
  ".dot + .dot": {
    marginLeft: "6px",
  },
  ".dot": {
    display: "inline-block",
    cursor: "pointer",
    height: "20px",
    width: "20px",
    borderRadius: "$full",
    background: "$neutral6",
    "&:hover": {
      background: "$neutral7",
    },
    "&.active": {
      background: "$primary11",
    },
  },
});

export const TestimonialsCarousel: FC = () => {
  return (
    <Carousel>
      <TestimonialCard />
      <CarouselButton>
        <ArrowLeft size={24} />
        <div className="dots">
          <div className="dot active"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
        <ArrowRight size={24} />
      </CarouselButton>
    </Carousel>
  );
};
