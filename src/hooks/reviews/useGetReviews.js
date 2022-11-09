import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function useGetReviews(serviceId) {
  const query = () => (serviceId ? `?serviceId=${serviceId}` : "");
  const getReviews = async () => {
    const { data } = await axios(`/reviews${query()}`);
    return data;
  };

  const data = useQuery({
    queryKey: ["get-reviews", serviceId],
    queryFn: getReviews,
  });
  return data;
}
