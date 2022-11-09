import { Modal, Title } from "@mantine/core";
import { useModalContext } from "../../context/modalContext";
import ServiceForm from "./ServiceForm";
import useServiceForm from "./useServiceForm";

export default function AddServiceModal() {
  const { addServiceModal } = useModalContext();
  const [opened, { close }] = addServiceModal;
  const form = useServiceForm();
  return (
    <Modal
      title={<Title order={4}>Please Add A Service Here,</Title>}
      classNames={{ header: "items-start" }}
      centered
      size={500}
      opened={opened}
      onClose={close}
      closeOnClickOutside={false}
    >
      <ServiceForm form={form} />
    </Modal>
  );
}
