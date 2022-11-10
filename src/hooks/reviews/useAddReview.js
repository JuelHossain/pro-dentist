import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export const addReview = async (newReview) => {
  const { data: response } = await axios.post(`/reviews`, newReview);
  return response;
};

export default function useAddReview() {
  const queryClient = useQueryClient();

  // refetching the data when its settled
  const refetch = () => {
    queryClient.invalidateQueries({ queryKey: ["get-reviews"] });
  };

  const mutation = useMutation({
    mutationFn: addReview,
    onSettled: refetch,
  });

  return mutation;
}
