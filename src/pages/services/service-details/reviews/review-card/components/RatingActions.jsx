import { Badge, Group, Stack } from "@mantine/core";
import useGetService from "../../../../../../hooks/services/useGetService";
import DeleteRating from "./DeleteRating";
import UpdateRating from "./UpdateRating";

export default function RatingActions({ serviceId, _id }) {
  const { data: { name } = {} } = useGetService(serviceId);
  return (
    <Stack className="absolute top-0 right-0 flex items-end">
      <Group>
        <UpdateRating id={_id} name={name} />
        <DeleteRating id={_id} name={name} />
      </Group>
      <Badge>{name || "Doesn't Exist"}</Badge>
    </Stack>
  );
}
