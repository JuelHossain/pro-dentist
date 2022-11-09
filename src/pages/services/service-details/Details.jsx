import { LoadingOverlay, Stack, Title } from "@mantine/core";
import useGetService from "../../../hooks/services/useGetService";
import Description from "./Description";

export default function Details({ id }) {
  const { data, isLoading } = useGetService(id);
  const { name, description } = data ?? {};
  return (
    <Stack className="md:basis-2/3 sm:basis-1/2">
      <Title>{name}</Title>
      <Description des={description} />
      <LoadingOverlay visible={isLoading} />
    </Stack>
  );
}
