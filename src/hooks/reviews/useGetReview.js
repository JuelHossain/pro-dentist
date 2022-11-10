import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function useGetReview(id, email) {
  let query = "";
  const queryKey = ["get-review", id];

  if (email) {
    query = `?email=${email}`;
    queryKey.push(email);
  }

  const getReview = async () => {
    const { data } = await axios(`/reviews/${id}${query}`);
    return data;
  };

  const data = useQuery({
    queryKey,
    queryFn: getReview,
    enabled: !!id,
  });
  return data;
}
