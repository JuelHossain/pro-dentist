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

  const optimisticUpdate = async (id) => {
    await queryClient.cancelQueries({ queryKey });
    const prevReview = queryClient.getQueryData(queryKey);

    queryClient.setQueryData(queryKey, (old) => old.filter((s) => s._id !== id));

    return { prevReview };
  };

  const undoChanges = (err, id, context) => {
    queryClient.setQueryData(queryKey, context.prevReview);
  };

  const refetch = () => {
    queryClient.invalidateQueries({ queryKey });
  };

  const mutation = useMutation({
    mutationFn: deleteReview,
    onMutate: optimisticUpdate,
    onError: undoChanges,
    onSettled: refetch,
  });
  return mutation;
}
