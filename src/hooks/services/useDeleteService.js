/* eslint-disable no-underscore-dangle */
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export const deleteService = async (id) => {
  const { data: res } = await axios.delete(`/services/${id}`);
  return res;
};

export default function useDeleteService() {
  const queryClient = useQueryClient();

  const refetch = () => {
    queryClient.invalidateQueries({ queryKey: ["get-services", undefined, undefined] });
  };

  const mutation = useMutation({
    mutationFn: deleteService,
    onSettled: refetch,
  });
  return mutation;
}
