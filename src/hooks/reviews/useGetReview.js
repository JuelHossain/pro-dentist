import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function useGetReview(id) {
  const getReview = async () => {
    const { data } = await axios(`/reviews/${id}`);
    return data;
  };

  const data = useQuery({
    queryKey: ["get-review", id],
    queryFn: getReview,
  });
  return { data };
}
