import { Button, Group } from "@mantine/core";
import { IconPencil, IconTrash } from "@tabler/icons";
import UpdateServiceModal from "../../../components/modify-services/UpdateServiceModal";
import { useModalContext } from "../../../context/modalContext";
import { useServiceContext } from "../../../context/serviceContext";

export default function ServiceActions() {
  const { updateServiceModal } = useModalContext();
  const { id } = useServiceContext();
  const [, { open }] = updateServiceModal;
  return (
    <Group grow>
      <Button onClick={open} leftIcon={<IconPencil size={18} />}>
        Edit
      </Button>
      <Button leftIcon={<IconTrash size={18} />}>Delete</Button>
      <UpdateServiceModal id={id} />
    </Group>
  );
}
