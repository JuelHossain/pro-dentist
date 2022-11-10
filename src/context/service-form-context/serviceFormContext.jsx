import { createContext, useContext } from "react";
import useServiceForm from "./useServiceForm";

export const serviceFormContext = createContext();
export function ServiceFormProvider({ id, children }) {
  const form = useServiceForm(id);
  return <serviceFormContext.Provider value={form}>{children}</serviceFormContext.Provider>;
}
export const useServiceFormContext = () => useContext(serviceFormContext);
