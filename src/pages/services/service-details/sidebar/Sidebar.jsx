import { Stack } from "@mantine/core";
import AddReviews from "../../../../components/modify-reviews/AddReviews";
import OtherService from "./components/OtherService";
import ServiceActions from "./components/ServiceActions";

export default function Sidebar() {
  return (
    <Stack className="w-full sm:w-auto">
      <ServiceActions />
      <AddReviews />
      <OtherService />
    </Stack>
  );
}
