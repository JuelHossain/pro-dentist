import { ActionIcon } from "@mantine/core";
import { IconTrash } from "@tabler/icons";

export default function DeleteRating() {
  return (
    <div>
      <ActionIcon>
        <IconTrash size={18} />
      </ActionIcon>
    </div>
  );
}
