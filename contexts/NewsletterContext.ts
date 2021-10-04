import { createContext, Dispatch, SetStateAction } from "react";

export type NewsletterContextProps = {
  displayNewsletterModal: boolean;
  setDisplayNewsletterModal: Dispatch<SetStateAction<boolean>>;
};

export const NewsletterContext = createContext<NewsletterContextProps>({
  displayNewsletterModal: false,
  setDisplayNewsletterModal: () => null,
});
