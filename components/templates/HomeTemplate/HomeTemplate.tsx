import { Main, Text } from "@components/atoms";
import { Question, Section } from "@components/molecules";
import {
  Calendar,
  ContactForm,
  Menu,
  MobileHead,
  Testimonials,
} from "@components/organisms";
import { EventDTO, QuestionDTO, TestimonialDTO } from "@dto";
import { DefaultLayout } from "@layouts";
import { MenuContext } from "contexts/MenuContext";
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
  testimonials,
}) => {
  const { activeMenu, setActiveMenu } = useContext(MenuContext);

  return (
    <DefaultLayout navActive={activeMenu}>
      <Menu />
      <MobileHead />
      <Main onClick={() => setActiveMenu(false)}>
        <Section id="introduction" title="Présentation du BDE" titleAs="h1">
          <Text css={{ mx: "auto" }} align="center" type="simple">
            {introduction}
          </Text>
        </Section>
        <Section id="calendar" title="Calendrier">
          <Calendar events={events} />
        </Section>
        <Section id="testimonials" title="Anciens Etudiants">
          <Testimonials testimonials={testimonials} />
        </Section>
        <Section id="faq" title="FAQ">
          {questions.map(({ _id, answer, question }) => (
            <Question
              key={_id}
              css={{ mx: "auto" }}
              question={question}
              answer={answer}
            />
          ))}
        </Section>
        <Section id="contact" title="Contact">
          <ContactForm />
        </Section>
      </Main>
    </DefaultLayout>
  );
};
