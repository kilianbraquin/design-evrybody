import { Button, Form, InputText, Overlay, Text } from "@components/atoms";
import { SocialList } from "@components/molecules";
import { styled, VariantProps } from "@stitches";
import { NewsletterContext } from "contexts";
import { FC, useContext } from "react";

export const NewsletterModalBox = styled("div", {
  position: "absolute",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  borderColor: "$neutral7",
  borderWidth: "3px",
  borderStyle: "$solid",
  background: "$neutral2",
  maxWidth: "320px",
  padding: "$12 $24",
  width: "calc($full - $32)",
  borderRadius: "$xl",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  // boxShadow: "0px 0px 5px 5px rgb(0 0 0 / 40%)",

  "& > * + *": {
    marginTop: "$12",
  },
});

export type NewsletterModalProps = VariantProps<typeof Overlay>;

export const NewsletterModal: FC<NewsletterModalProps> = (props) => {
  const { setDisplayNewsletterModal } = useContext(NewsletterContext);

  return (
    <Overlay
      {...props}
      css={{ padding: "$12" }}
      onClick={() => setDisplayNewsletterModal(false)}
    >
      <NewsletterModalBox onClick={(e) => e.stopPropagation()}>
        <Text
          as="span"
          css={{ display: "block" }}
          align="center"
          color="primary"
          family="headline"
          weight="bold"
          size="xl"
        >
          Abonnez-vous à notre newsletter
        </Text>
        <Text align="center" css={{ maxWidth: "$256" }}>
          Soyez informés de nos dernières actualités et de nos prochains
          événements.
        </Text>
        <Form css={{ width: "$full" }} name="test">
          <div>
            <InputText name="email" width="full" type="email" />
          </div>
          <Button
            type="submit"
            css={{ mx: "auto", marginTop: "$12" }}
            style="border"
          >
            {"S'inscrire"}
          </Button>
        </Form>
        <SocialList />
      </NewsletterModalBox>
    </Overlay>
  );
};
