import { HomeTemplate } from "@components/templates";
import DemoData from "@data/demo";
import type { EventDTO, QuestionDTO, TestimonialDTO } from "@dto";
import type { GetStaticProps, NextPage } from "next";
import { NextSeo } from "next-seo";

type HomeProps = {
  introduction: string;
  events: EventDTO[];
  questions: QuestionDTO[];
  testimonials: TestimonialDTO[];
};

const Home: NextPage<HomeProps> = ({
  introduction,
  events,
  questions,
  testimonials,
}) => (
  <>
    <NextSeo title="EvryBody | BDE Miagiste de l'universite Paris-Saclay" />
    <HomeTemplate
      introduction={introduction}
      events={events}
      questions={questions}
      testimonials={testimonials}
    />
  </>
);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  // API Calls

  return {
    props: DemoData,
  };
};

export default Home;
