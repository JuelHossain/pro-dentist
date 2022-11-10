/* eslint-disable no-underscore-dangle */
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export const deleteReview = async (id) => {
  const { data: res } = await axios.delete(`/reviews/${id}`);
  return res;
};

export default function useDeleteReview() {
  const queryClient = useQueryClient();
  const queryKey = ["get-reviews"];

  const refetch = () => {
    queryClient.invalidateQueries({ queryKey });
  };

  const mutation = useMutation({
    mutationFn: deleteReview,
    onSettled: refetch,
  });
  return mutation;
}
