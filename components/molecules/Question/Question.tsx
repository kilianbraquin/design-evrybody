import { Text } from "@components/atoms";
import { ChevronDown, ChevronUp } from "@icons/solid";
import { CSS, styled } from "@stitches";
import { FC, useMemo, useState } from "react";

const Article = styled("article", {
  position: "relative",
  cursor: "pointer",
  background: "$neutral2",
  borderColor: "$neutral7",
  borderWidth: "$3",
  borderStyle: "$solid",
  color: "$neutral12",
  borderRadius: "$xl",
  maxWidth: "$640",
  padding: "8px 10px 8px 10px",

  [`&:hover`]: {
    borderColor: "$neutral8",
  },

  [`& svg`]: {
    position: "absolute",
    top: "calc(50%)",
    right: "0px",
    transform: "translateY(-50%)",
  },

  "@sm": {
    padding: "8px 20px 8px 20px",
  },
});

type QuestionProps = {
  css?: CSS;
  answer?: string;
  question?: string;
};

export const Question: FC<QuestionProps> = ({ answer, css, question }) => {
  const [displayContent, setDisplayContent] = useState(false);

  const ToggleIcon = useMemo(
    () => (displayContent ? ChevronUp : ChevronDown),
    [displayContent]
  );

  return (
    <Article
      css={css}
      onClick={() => setDisplayContent((previousValue) => !previousValue)}
    >
      <Text
        as="h3"
        css={{
          fontSize: "$base",
          paddingRight: "$32",
          position: "relative",
          "@sm": { fontSize: "$lg" },
        }}
        weight="bold"
        family="headline"
      >
        {question}
        <ToggleIcon size={18} />
      </Text>
      <Text
        as="p"
        css={{
          fontSize: "$sm",
          marginTop: "$8",
          marginBottom: "$4",
          "@sm": { fontSize: "$base", paddingRight: "$24" },
        }}
        hidden={!displayContent}
      >
        {answer}
      </Text>
    </Article>
  );
};
