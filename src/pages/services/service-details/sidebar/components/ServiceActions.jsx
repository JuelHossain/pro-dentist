import { Button, Group } from "@mantine/core";
import { IconPencil, IconTrash } from "@tabler/icons";
import UpdateServiceModal from "../../../../../components/modify-services/UpdateServiceModal";
import { useModalContext } from "../../../../../context/modalContext";

export default function ServiceActions() {
  const { updateServiceModal } = useModalContext();
  const [, { open }] = updateServiceModal;
  return (
    <Group grow>
      <Button onClick={open} leftIcon={<IconPencil size={18} />}>
        Edit
      </Button>
      <Button leftIcon={<IconTrash size={18} />}>Delete</Button>
      <UpdateServiceModal />
    </Group>
  );
}
