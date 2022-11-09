/* eslint-disable no-underscore-dangle */
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export const updateReview = async ({ patch, id }) => {
  const { data: response } = await axios.patch(`/reviews/${id}`, patch);
  return response;
};

export default function useUpdateReview() {
  const queryClient = useQueryClient();

  // optimistic update on query start

  const optimisticUpdate = async ({ patch, id }) => {
    const queryKey = ["get-review", id];
    await queryClient.cancelQueries({ queryKey });

    const prevReview = queryClient.getQueryData(queryKey);

    queryClient.setQueryData(queryKey, { ...patch, prevReview });

    return { prevReview };
  };

  // undo changes on error
  const undoChanges = (err, { id }, { prevReview }) => {
    const queryKey = ["get-review", id];
    queryClient.setQueryData(queryKey, prevReview);
  };

  // refetch on query end
  const refetch = ({ id }) => {
    const queryKey = ["get-review", id];
    queryClient.invalidateQueries({ queryKey });
    const queryKey2 = ["get-reviews"];
    queryClient.invalidateQueries({ queryKey: queryKey2 });
  };

  const mutation = useMutation({
    mutationFn: updateReview,
    onMutate: optimisticUpdate,
    onError: undoChanges,
    onSettled: refetch,
  });
  return mutation;
}
