import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function useGetReviews(serviceId) {
  const query = `?serviceId=${serviceId}`;
  const getReviews = async () => {
    const { data } = await axios(` /reviews${serviceId && query}`);
    return data;
  };

  const data = useQuery({
    queryKey: ["get-reviews"],
    queryFn: getReviews,
  });
  return data;
}
