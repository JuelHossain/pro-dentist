import { useMutation } from "@tanstack/react-query";
import axios from "axios";

export default function useToken() {
  const generateToken = async (user) => {
    const { data } = await axios.put(`/users`, user);
    return data;
  };
  const mutation = useMutation({
    mutationFn: generateToken,
    onSuccess: (data) => {
      localStorage.setItem("accessToken", data.accessToken);
    },
    onError: () => {
      localStorage.removeItem("accessToken");
    },
  });
  return mutation;
}
