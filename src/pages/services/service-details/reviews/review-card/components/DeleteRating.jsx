import { ActionIcon, Text } from "@mantine/core";
import { openConfirmModal } from "@mantine/modals";
import { IconTrash } from "@tabler/icons";
import useDeleteReview from "../../../../../../hooks/reviews/useDeleteReview";

export default function DeleteRating({ id, name }) {
  const { mutate } = useDeleteReview();
  const openDeleteModal = () =>
    openConfirmModal({
      title: `Delete Rating for ${name}`,
      centered: true,
      children: (
        <Text size="sm">
          Are you sure you want to delete your profile? This action is destructive and you will have to contact support
          to restore your data.
        </Text>
      ),
      labels: { confirm: "Delete account", cancel: "No don't delete it" },
      confirmProps: { color: "red" },
      onCancel: () => console.log("Cancel"),
      onConfirm: () => {
        mutate(id);
      },
    });
  return (
    <ActionIcon onClick={openDeleteModal} variant="light" color="red">
      <IconTrash size={18} />
    </ActionIcon>
  );
}
