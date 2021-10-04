import { HomeTemplate } from "@components/templates";
import type { EventDTO, QuestionDTO, TestimonialDTO } from "@dto";
import type { GetStaticProps, NextPage } from "next";
import { NextSeo } from "next-seo";

const questionsExport: QuestionDTO[] = [
  {
    _id: "607090f2c3cec212bf42810d",
    answer:
      "Nous avons 3 types d'actions : Les actions continues comme l'entraide, la participation aux ateliers de perfectionnement de la filière à l'échelle locale et nationale. Les événements en présentiel comme les forums et les soirées étudiantes ou les événements en semi-présentiel comme les compétitions de jeux-vidéos.\nPar le biais du BDE, vous pouvez également participer à des formations, des ateliers et des événements organisés par le BDE National MIAGE Connection.",
    question: "Concretement, Qu'est ce qu'on fait ?",
  },
  {
    _id: "607091f5c3cec212bf42810e",
    answer:
      "La seule condition pour nous rejoindre est d'être un étudiant en MIAGE à l'Université d'Évry. Vous pouvez participer à la communication, à l'événementiel, à l'animation du Discord ou à plein d'autres choses au sein du BDE.\nSi tu souhaites nous rejoindre, tu peux venir nous parler à la Fac, sur le Discord, le Insta ou le Facebook de l'association.",
    question: "Je souhaite m'investir, Comment vous rejoindre ?",
  },
  {
    _id: "607091fec3cec212bf42810f",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam egestas tincidunt mi, vel bibendum ante bibendum nec. Etiam ligula leo, dictum ac pretium suscipit, sollicitudin vel est.",
    question: "Duis auctor elit eget massa viverra tincidunt ?",
  },
];

const eventsExport: EventDTO[] = [
  {
    _id: "607099a1c3cec212bf428111",
    date: "2021-01-01T22:00:00.000Z",
    name: "Soirée de présentation du BDE",
  },
  {
    _id: "607099e3c3cec212bf428112",
    date: "2021-02-01T22:00:00.000Z",
    name: "Préparation d’un tournoi E-Sport",
  },
  {
    _id: "607099ecc3cec212bf428113",
    date: "2021-03-01T22:00:00.000Z",
    name: "Atelier CV / Simulations d’entretiens",
  },
  {
    _id: "607099f8c3cec212bf428114",
    date: "2021-04-01T22:00:00.000Z",
    name: "Mise en place de l’entraide en ligne",
  },
  {
    _id: "60709a02c3cec212bf428115",
    date: "2021-05-01T22:00:00.000Z",
    name: "Hackaton",
  },
  {
    _id: "60709a0bc3cec212bf428116",
    date: "2021-06-01T22:00:00.000Z",
    name: "Mise en place d’entraide en présentiel",
  },
  {
    _id: "60709a15c3cec212bf428117",
    date: "2021-07-01T22:00:00.000Z",
    name: "Soirée de fin d’année",
  },
  {
    _id: "60b9e4811f73220009d0e9e5",
    date: "2021-09-01T22:00:00.000Z",
    name: "Rentrée du BDE",
  },
  {
    _id: "613f5350ac780b0009285384",
    date: "2021-09-13T22:00:00.000Z",
    name: "Rentrée du bureau !",
  },
  {
    _id: "613f5377ac780b0009285387",
    date: "2021-12-02T22:00:00.000Z",
    name: "Nuit de l'info ! ",
  },
  {
    _id: "61585136ff2bd5000990e7e9",
    date: "2021-01-02T22:00:00.000Z",
    name: "Test",
  },
  {
    _id: "61585136ff2bd5000990e7e9",
    date: "2022-01-02T22:00:00.000Z",
    name: "Test",
  },
];

const testimonialsExport: TestimonialDTO[] = [
  {
    _id: "60709986c3cec212bf428110",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam egestas tincidunt mi, vel bibendum ante bibendum nec. Etiam ligula leo, dictum ac pretium suscipit, sollicitudin vel est. Ut et massa a justo accumsan eleifend.",
    description: "Promo 2017",
    firstname: "Tilly",
    lastname: "Guibord",
    image: "/uploaded/2d6e3edc.png",
  },
  {
    _id: "60b9e4b71f73220009d0e9e6",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam egestas tincidunt mi, vel bibendum ante bibendum nec. Etiam ligula leo, dictum ac pretium suscipit, sollicitudin vel est. Ut et massa a justo accumsan eleifend.",
    description: "Voilà un test",
    firstname: "Un",
    lastname: " Etudiant",
    image: "",
  },
];

const introduction =
  "Le BDE EvryBody a ouvert ses portes ! Nous avons pour objectifs d'animer la filière MIAGE au travers d'événements comme des concours, des forums ou autre destinés aux étudiants. Tout au long de l'année nous mettons en place de nombreuses actions comme de l'entraide (tutorat) de l'accompagnement au projets étudiants, des compétitions de jeux vidéos. Nous restons ouverts à tous les projets des étudiants permettant d'animer les acteurs des filières MIAGE d'Évry et peuvent le conduire de la préparation à la réalisation.";

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
    props: {
      introduction,
      questions: questionsExport,
      events: eventsExport,
      testimonials: testimonialsExport,
    },
  };
};

export default Home;
