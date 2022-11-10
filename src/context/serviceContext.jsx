import { createContext, useContext, useMemo, useState } from "react";
import useGetService from "../hooks/services/useGetService";

export const serviceContext = createContext();
export function ServiceProvider({ children }) {
  const [id, setId] = useState("");
  const data = useGetService(id);

  const context = useMemo(() => ({ id, setId, data }), [id, setId, data]);

  return <serviceContext.Provider value={context}>{children}</serviceContext.Provider>;
}
export const useServiceContext = () => useContext(serviceContext);
