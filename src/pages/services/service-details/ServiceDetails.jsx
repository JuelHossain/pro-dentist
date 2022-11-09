import { Container, Divider, LoadingOverlay, Stack, Title } from "@mantine/core";
import { useParams } from "react-router-dom";
import useGetService from "../../../hooks/services/useGetService";
import AddReviews from "./AddReviews";

import Description from "./Description";
import OtherService from "./OtherService";
import Reviews from "./rating/Reviews";

export default function ServiceDetails() {
  const { id } = useParams();
  const { data, isLoading } = useGetService(id);
  const { name, description } = data ?? {};
  return (
    <Container className="my-10 sm:my-20 ">
      <Stack spacing={75}>
        <div className="space-y-5 gap-10 sm:flex-row flex-col-reverse flex">
          <Stack className="w-full sm:w-auto">
            <AddReviews serviceId={id} />
            <OtherService id={id} />
          </Stack>
          <Divider orientation="vertical" className="sm:flex hidden" />
          <Stack className="md:basis-2/3 sm:basis-1/2">
            <Title>{name}</Title>
            <Description des={description} />
          </Stack>
        </div>
        <Reviews serviceId={id} />
      </Stack>
      <LoadingOverlay visible={isLoading} />
    </Container>
  );
}
