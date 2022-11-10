import { LoadingOverlay, Stack, Title } from "@mantine/core";
import { useEffect } from "react";
import { useServiceContext } from "../../../context/serviceContext";
import Description from "./Description";

export default function Details() {
  const { temp, data, isLoading } = useServiceContext();
  const { name, description } = data ?? {};

  useEffect(() => {
    // doing rerender only if value changes
  }, [temp]);

  return (
    <Stack className="md:basis-2/3 sm:basis-1/2">
      <Title>{name}</Title>
      <Description des={description} />
      <LoadingOverlay visible={isLoading} />
    </Stack>
  );
}
