import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export const addReview = async (newReview) => {
  const { data: response } = await axios.post(`/reviews`, newReview);
  return response;
};

export default function useAddReview() {
  const queryClient = useQueryClient();

//   // updating review optimistically
//   const optimisticUpdate = async (newReview) => {
//     await queryClient.cancelQueries({ queryKey: ["get-reviews"] });

//     const prevReviews = queryClient.getQueryData(["get-reviews"]);

//     queryClient.setQueryData(["get-reviews"], (old) => [newReview, ...old]);

//     return { prevReviews };
//   };

  // undoing changes after and error
  const undoChanges = (err, newReview, context) => {
    queryClient.setQueryData(["get-reviews"], context.prevReviews);
  };

  // refetching the data when its settled
  const refetch = () => {
    queryClient.invalidateQueries({ queryKey: ["get-reviews"] });
  };

  const mutation = useMutation({
    mutationFn: addReview,
    // onMutate: optimisticUpdate,
    onError: undoChanges,
    onSettled: refetch,
  });

  return mutation;
}
