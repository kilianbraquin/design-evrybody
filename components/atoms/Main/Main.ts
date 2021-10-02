import { SectionContainer } from "@components/molecules";
import { MobileHeadSize } from "@components/organisms";
import { styled } from "@stitches";

export const Main = styled("main", {
  brTop: "$lg",
  boxShadow: "0px 0px 5px 5px rgb(0 0 0 / 40%)",
  backgroundColor: "$neutral2",
  minHeight: `calc($h-screen - ${MobileHeadSize})`,
  marginTop: MobileHeadSize,
  padding: "$12",
  width: "$w-screen",
  [`& > ${SectionContainer} + ${SectionContainer}`]: {
    marginTop: "$24",
  },
  "@sm": {
    padding: "$24",
  },
  "@lg": {
    width: "auto",
    marginTop: "$32",
    borderTopRightRadius: 0,
    minHeight: "calc($h-screen - $32)",
  },
});
