import { Stack } from "@mantine/core";
import ReviewForm from "../../../../components/modify-reviews/ReviewForm/ReviewForm";
import { useServiceContext } from "../../../../context/serviceContext";
import OtherService from "./components/OtherService";
import ServiceActions from "./components/ServiceActions";

export default function Sidebar() {
  const { id } = useServiceContext();
  return (
    <Stack className="w-full sm:w-auto">
      <ServiceActions />
      <ReviewForm id={id} />
      <OtherService />
    </Stack>
  );
}
