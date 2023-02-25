import { CSS, styled } from "@stitches";
import { FC, PropsWithChildren } from "react";

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

type Props = PropsWithChildren<{
  css?: CSS;
  name?: string;
}>;

const FormContainer = styled("form");

export const Form: FC<Props> = (props) => {
  return (
    <FormContainer
      data-netlify="true"
      method="POST"
      onSubmit={(event) => {
        event.preventDefault();
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encode({
            "form-name": event.currentTarget.getAttribute("name"),
            email: "test",
          }),
        })
          .then(() => alert("/thank-you/"))
          .catch((error) => alert(error));
      }}
      {...props}
    ></FormContainer>
  );
};
