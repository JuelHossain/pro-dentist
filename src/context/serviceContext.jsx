import { createContext, useContext, useMemo } from "react";
import useGetReviews from "../hooks/reviews/useGetReviews";
import useGetService from "../hooks/services/useGetService";

export const serviceContext = createContext();
export function ServiceProvider({ id, children }) {
  const data = useGetService(id);
  const reviews = useGetReviews(id);

  const value = useMemo(() => ({ id, ...data, reviews }), [id, data, reviews]);

  return <serviceContext.Provider value={value}>{children}</serviceContext.Provider>;
}
export const useServiceContext = () => useContext(serviceContext);
