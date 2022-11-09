import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export const addService = async (newService) => {
  const { data: response } = await axios.post(`/services`, newService);
  return response;
};

export default function useAddService() {
  const queryClient = useQueryClient();

  // refetching the data when its settled
  const refetch = () => {
    queryClient.invalidateQueries({ queryKey: ["get-services"] });
  };

  const mutation = useMutation({
    mutationFn: addService,
    onSettled: refetch,
  });

  return mutation;
}
