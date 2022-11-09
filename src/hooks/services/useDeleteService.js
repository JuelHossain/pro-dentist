/* eslint-disable no-underscore-dangle */
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export const deleteService = async (id) => {
  const { data: res } = await axios.delete(`/services/${id}`);
  return res;
};

export default function useDeleteService() {
  const queryClient = useQueryClient();
  const queryKey = ["get-services"];

  const optimisticUpdate = async (id) => {
    await queryClient.cancelQueries({ queryKey });
    const prevServices = queryClient.getQueryData(queryKey);

    queryClient.setQueryData(queryKey, (old) => old.filter((s) => s._id !== id));

    return { prevServices };
  };

  const undoChanges = (err, id, context) => {
    queryClient.setQueryData(queryKey, context.prevServices);
  };

  const refetch = () => {
    queryClient.invalidateQueries({ queryKey });
  };

  const mutation = useMutation({
    mutationFn: deleteService,
    onMutate: optimisticUpdate,
    onError: undoChanges,
    onSettled: refetch,
  });
  return mutation;
}
