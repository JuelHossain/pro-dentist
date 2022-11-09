import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function useGetServices(page, size) {
  const query = () => (page || size ? `?page=${page}&size=${size}` : "");

  const getServices = async () => {
    const { data } = await axios(`/services${query()}`);
    return data;
  };
  const data = useQuery({
    queryKey: ["get-services", page, size],
    queryFn: getServices,
  });
  return data;
}
