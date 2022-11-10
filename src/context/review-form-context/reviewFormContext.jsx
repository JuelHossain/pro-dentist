import { createContext, useContext } from "react";
import useReviewForm from "./useReviewForm";

export const reviewFormContext = createContext();
export function ReviewFormProvider({ id, email, children }) {
  const form = useReviewForm(id,email);
  return <reviewFormContext.Provider value={form}>{children}</reviewFormContext.Provider>;
}
export const useReviewFormContext = () => useContext(reviewFormContext);
