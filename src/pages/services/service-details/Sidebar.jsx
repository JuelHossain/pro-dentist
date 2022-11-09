import { Stack } from "@mantine/core";
import AddReviews from "./AddReviews";
import OtherService from "./OtherService";

export default function Sidebar({ id }) {
  return (
    <Stack className="w-full sm:w-auto">
      <AddReviews serviceId={id} />
      <OtherService id={id} />
    </Stack>
  );
}
