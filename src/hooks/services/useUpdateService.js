/* eslint-disable no-underscore-dangle */
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export const updateService = async (updatedService) => {
  const { data: response } = await axios.patch(`/services/${updatedService._id}`, updatedService);
  return response;
};

export default function useUpdateService() {
  const queryClient = useQueryClient();

  // optimistic update on query start

  const optimisticUpdate = async (updatedService) => {
    const queryKey = ["get-service", updatedService._id];

    await queryClient.cancelQueries({ queryKey });

    const prevService = queryClient.getQueryData(queryKey);

    queryClient.setQueryData(queryKey, { ...updatedService, prevService });

    return { prevService, updatedService };
  };

  // undo changes on error
  const undoChanges = (err, un, { prevService, updatedService }) => {
    const queryKey = ["get-service", updatedService._id];
    queryClient.setQueryData(queryKey, prevService);
  };

  // refetch on query end
  const refetch = (updatedService) => {
    const queryKey = ["get-service", updatedService._id];
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
