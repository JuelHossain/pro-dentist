import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function useGetService(id) {
  const getService = async () => {
    const { data } = await axios(` /services/${id}`);
    return data;
  };

  const data = useQuery({
    queryKey: ["get-service", id],
    queryFn: getService,
    enabled: !!id,
  });
  return { data };
}
