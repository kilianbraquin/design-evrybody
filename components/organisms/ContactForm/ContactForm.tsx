import { Button, InputText, Text } from "@components/atoms";
import { PaperPlane } from "@icons/solid";
import { styled } from "@stitches";
import { FC } from "react";

const Form = styled("form", {
  maxWidth: "$640",
  mx: "auto",
  [`& > textarea`]: {
    height: "$192",
  },
  [`& > textarea, & > input`]: {
    width: "$full",
  },
  [`& > * + *`]: {
    marginTop: "$12",
  },
});

export const ContactForm: FC = () => {
  return (
    <Form>
      <InputText placeholder="Nom complet" type="text" />
      <InputText placeholder="Adresse email" type="email" />
      <InputText as="textarea" placeholder="Message" />
      <Button css={{ mx: "auto" }} type="submit">
        <Text as="span" textTransform="uppercase">
          Envoyer
        </Text>
        <PaperPlane css={{ marginLeft: "$8" }} size={16} />
      </Button>
    </Form>
  );
};
