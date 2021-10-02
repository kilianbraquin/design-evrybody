import { Main, Text } from "@components/atoms";
import { Question, Section } from "@components/molecules";
import {
  Calendar,
  ContactForm,
  Menu,
  MobileHead,
  TestimonialsCarousel,
} from "@components/organisms";
import { EventDTO, QuestionDTO, TestimonialDTO } from "@dto";
import { DefaultLayout } from "@layouts";
import { MenuContext } from "contexts/MenuContext";
import { NextSeo } from "next-seo";
import { FC, useContext } from "react";

type HomeTemplateProps = {
  introduction: string;
  events: EventDTO[];
  questions: QuestionDTO[];
  testimonials: TestimonialDTO[];
};

export const HomeTemplate: FC<HomeTemplateProps> = ({
  events,
  introduction,
  questions,
}) => {
  const { activeMenu, setActiveMenu } = useContext(MenuContext);

  return (
    <DefaultLayout navActive={activeMenu}>
      <NextSeo title="EvryBody | BDE Miagiste de l'universite Paris-Saclay" />
      <Menu />
      <MobileHead />
      <Main onClick={() => setActiveMenu(false)}>
        <Section title="Présentation du BDE" titleAs="h1">
          <Text css={{ mx: "auto" }} align="center" type="simple">
            {introduction}
          </Text>
        </Section>
        <Section title="Calendrier">
          <Calendar events={events} />
        </Section>
        <Section title="Anciens Etudiants">
          <TestimonialsCarousel />
        </Section>
        <Section title="FAQ">
          {questions.map(({ _id, answer, question }) => (
            <Question
              key={_id}
              css={{ mx: "auto" }}
              question={question}
              answer={answer}
            />
          ))}
        </Section>
        <Section title="Contact">
          <ContactForm />
        </Section>
      </Main>
    </DefaultLayout>
  );
};
