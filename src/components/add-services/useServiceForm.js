/* eslint-disable no-shadow */
import { useForm } from "@mantine/form";
import { showNotification } from "@mantine/notifications";
import { useModalContext } from "../../context/modalContext";
import useAddService from "../../hooks/services/useAddService";
import useGetService from "../../hooks/services/useGetService";
import useUpdateService from "../../hooks/services/useUpdateService";

export default function useServiceForm(id) {
  const { data } = useGetService(id);
  const { mutateAsync: addService, isLoading: adding } = useAddService();
  const { mutateAsync: updateService, isLoading: updating } = useUpdateService();

  const loading = adding || updating;

  const { addServiceModal } = useModalContext();
  const [, { close }] = addServiceModal;

  const form = useForm({
    initialValues: {
      name: data?.name || "",
      description: data?.description || "",
    },
    validate: {
      name: (value) => (value === "" ? "Service name is required" : null),
      description: (value) => (value.length < 100 ? "Description should at least be 100 characters" : null),
    },
  });
  const { onSubmit, reset } = form;
  const submitHandler = (e) => {
    onSubmit(async (d) => {
      const data = { ...d, createdAt: new Date() };
      if (id) {
        await updateService({ ...data, _id: id });
        showNotification({ title: "Service has been updated successfully" });
        reset();
        close();
      } else {
        await addService(data);
        showNotification({ title: "Service has been added successfully" });
        reset();
        close();
      }
    })(e);
  };
  return { ...form, submitHandler, loading };
}
