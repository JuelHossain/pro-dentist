import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export const addService = async (newService) => {
  const { data: response } = await axios.post(`/services`, newService);
  return response;
};

export default function useAddService() {
  const queryClient = useQueryClient();

  // // updating service optimistically
  // const optimisticUpdate = async (newService) => {
  //   await queryClient.cancelQueries({ queryKey: ["get-services"] });

  //   const previousServices = queryClient.getQueryData(["get-services"]);

  //   queryClient.setQueryData(["get-services"], (old) => [newService, ...old]);

  //   return { previousServices };
  // };

  // undoing changes after and error
  const undoChanges = (err, newService, context) => {
    queryClient.setQueryData(["get-services"], context.previousServices);
  };

  // refetching the data when its settled
  const refetch = () => {
    queryClient.invalidateQueries({ queryKey: ["get-services"] });
  };

  const mutation = useMutation({
    mutationFn: addService,
    // onMutate: optimisticUpdate,
    onError: undoChanges,
    onSettled: refetch,
  });

  return mutation;
}
