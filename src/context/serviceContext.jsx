import { createContext, useContext, useMemo, useReducer } from "react";
import useGetService from "../hooks/services/useGetService";

export const serviceContext = createContext();
export function ServiceProvider({ id, children }) {
  const [temp, rerender] = useReducer((v) => v + 1, 0);

  const data = useGetService(id);
  const value = useMemo(() => ({ id, temp, rerender, ...data }), [id, temp, rerender, data]);

  return <serviceContext.Provider value={value}>{children}</serviceContext.Provider>;
}
export const useServiceContext = () => useContext(serviceContext);
