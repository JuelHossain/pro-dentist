import { Badge, Group, Stack } from "@mantine/core";
import useGetService from "../../../../../../hooks/services/useGetService";
import DeleteRating from "./DeleteRating";
import EditRating from "./EditRating";

export default function RatingActions({ serviceId }) {
  const { data: { name } = {} } = useGetService(serviceId);
  return (
    <Stack className="absolute top-0 right-0 flex items-end">
      <Group>
        <EditRating />
        <DeleteRating />
      </Group>
      <Badge>{name || "Doesn't Exist"}</Badge>
    </Stack>
  );
}
