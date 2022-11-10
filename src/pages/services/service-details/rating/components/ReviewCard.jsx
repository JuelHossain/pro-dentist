import { Avatar, Group, Paper, Rating, Stack, Text } from "@mantine/core";
import moment from "moment";
import useGetReview from "../../../../../hooks/reviews/useGetReview";

export default function ReviewCard({ _id }) {
  const { data } = useGetReview(_id);
  const { userDetails: { displayName, photoURL } = {}, rating, sayings, ratedAt } = data ?? {};
  const time = moment(ratedAt).fromNow();
  return (
    <Paper withBorder radius="md" className="p-4 h-full">
      <Stack className="w-full">
        <Group>
          <Avatar src={photoURL} alt={displayName} radius="xl" />
          <div>
            <Text size="sm">{displayName}</Text>
            <Text size="xs" color="dimmed">
              {time}
            </Text>
          </div>
        </Group>
        <div className="px-4">
          <Rating readOnly value={rating} />
          <Text className="line-clamp-2">{sayings}</Text>
        </div>
      </Stack>
    </Paper>
  );
}
