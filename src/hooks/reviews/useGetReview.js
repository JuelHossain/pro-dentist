import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function useGetReview(id, email) {
  let query = "";

  if (email) {
    query = `?email=${email}`;
  }

  const getReview = async () => {
    const { data } = await axios(`/reviews/${id}${query}`);
    return data;
  };

  const data = useQuery({
    queryKey: ["get-review", id, email],
    queryFn: getReview,
    enabled: !!id,
  });
  return data;
}
