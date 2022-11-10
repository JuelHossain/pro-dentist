import { Container, Divider, Stack } from "@mantine/core";
import { useParams } from "react-router-dom";
import UpdateServiceModal from "../../../components/modify-services/UpdateServiceModal";

import Details from "./Details";
import Reviews from "./rating/Reviews";
import Sidebar from "./Sidebar";

export default function ServiceDetails() {
  const { id } = useParams();
  return (
    <Container className="my-10 sm:my-20 ">
      <Stack spacing={75}>
        <div className="space-y-5 gap-10 sm:flex-row flex-col-reverse flex">
          <Sidebar id={id} />
          <Divider orientation="vertical" className="sm:flex hidden" />
          <Details id={id} />
        </div>
        <Reviews serviceId={id} />
      </Stack>
      <UpdateServiceModal id={id} />
    </Container>
  );
}
