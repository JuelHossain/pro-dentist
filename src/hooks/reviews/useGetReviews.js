import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function useGetReviews(serviceId, email) {
  let query = "";
  if (serviceId && email) {
    query = `?serviceId=${serviceId}&email=${email}`;
  } else if (email) {
    query = `?serviceId=${serviceId}`;
  } else if (serviceId) {
    query = `?serviceId=${serviceId}`;
  }

  const getReviews = async () => {
    const { data } = await axios(`/reviews${query}`);
    return data;
  };

  const data = useQuery({
    queryKey: ["get-reviews", serviceId, email],
    queryFn: getReviews,
  });
  return data;
}
