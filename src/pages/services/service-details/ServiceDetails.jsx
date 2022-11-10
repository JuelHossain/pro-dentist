import { Container, Divider, Stack } from "@mantine/core";
import { useParams } from "react-router-dom";
import { ServiceProvider } from "../../../context/serviceContext";

import Details from "./Details";
import Reviews from "./rating/Reviews";
import Sidebar from "./Sidebar";

export default function ServiceDetails() {
  const { id } = useParams();
  return (
    <ServiceProvider id={id}>
      <Container className="my-10 sm:my-20 ">
        <Stack spacing={75}>
          <div className="space-y-5 gap-10 sm:flex-row flex-col-reverse flex">
            <Sidebar />
            <Divider orientation="vertical" className="sm:flex hidden" />
            <Details />
          </div>
          <Reviews />
        </Stack>
      </Container>
    </ServiceProvider>
  );
}
