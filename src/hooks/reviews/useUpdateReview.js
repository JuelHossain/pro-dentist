/* eslint-disable no-underscore-dangle */
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export const updateReview = async (updatedReview) => {
  const { data: response } = await axios.patch(`/reviews/${updatedReview._id}`, updatedReview);
  return response;
};

export default function useUpdateReview() {
  const queryClient = useQueryClient();

  // optimistic update on query start

  const optimisticUpdate = async (updatedReview) => {
    const queryKey = ["get-review", updatedReview._id];

    await queryClient.cancelQueries({ queryKey });

    const prevReview = queryClient.getQueryData(queryKey);

    queryClient.setQueryData(queryKey, { ...updatedReview, prevReview });

    return { prevReview, updatedReview };
  };

  // undo changes on error
  const undoChanges = (err, un, { prevReview, updatedReview }) => {
    const queryKey = ["get-review", updatedReview._id];
    queryClient.setQueryData(queryKey, prevReview);
  };

  // refetch on query end
  const refetch = (updatedReview) => {
    const queryKey = ["get-review", updatedReview._id];
    queryClient.invalidateQueries({ queryKey });
  };

  const mutation = useMutation({
    mutationFn: updateReview,
    onMutate: optimisticUpdate,
    onError: undoChanges,
    onSettled: refetch,
  });
  return mutation;
}
