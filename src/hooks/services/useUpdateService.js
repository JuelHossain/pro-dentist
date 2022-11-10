/* eslint-disable no-underscore-dangle */
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export const updateService = async ({ patch, id }) => {
  const { data: response } = await axios.patch(`/services/${id}`, patch);
  return response;
};

export default function useUpdateService() {
  const queryClient = useQueryClient();

  // optimistic update on query start

  const optimisticUpdate = async ({ patch, id }) => {
    const queryKey = ["get-service", id];

    const prevService = queryClient.getQueryData(queryKey);

    queryClient.setQueryData(queryKey, { ...patch, prevService });

    return { prevService, patch };
  };

  // undo changes on error
  const undoChanges = (err, { id }, { prevService }) => {
    const queryKey = ["get-service", id];
    queryClient.setQueryData(queryKey, prevService);
  };

  // refetch on query end
  const refetch = ({ id }) => {
    const queryKey = ["get-service", id];
    queryClient.invalidateQueries({ queryKey });
  };

  const mutation = useMutation({
    mutationFn: updateService,
    onMutate: optimisticUpdate,
    onError: undoChanges,
    onSettled: refetch,
  });
  return mutation;
}
