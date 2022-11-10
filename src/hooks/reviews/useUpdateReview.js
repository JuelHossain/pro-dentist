/* eslint-disable no-underscore-dangle */
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase";

export const updateReview = async ({ patch, id }) => {
  const { data: response } = await axios.patch(`/reviews/${id}`, patch);
  return response;
};

export default function useUpdateReview() {
  const queryClient = useQueryClient();
  const [user] = useAuthState(auth);

  // refetch on query end
  const refetch = async (res, err, { id }) => {
    const queryKey = ["get-review", id];
    await queryClient.invalidateQueries({ queryKey });
    await queryClient.invalidateQueries({
      queryKey: ["get-reviews", undefined, user?.email],
    });
  };

  const mutation = useMutation({
    mutationFn: updateReview,
    onSettled: refetch,
  });
  return mutation;
}
