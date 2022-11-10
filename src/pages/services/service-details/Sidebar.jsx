import { Stack } from "@mantine/core";
import AddReviews from "./AddReviews";
import OtherService from "./OtherService";
import ServiceActions from "./ServiceActions";

export default function Sidebar() {
  return (
    <Stack className="w-full sm:w-auto">
      <ServiceActions />
      <AddReviews />
      <OtherService  />
    </Stack>
  );
}
