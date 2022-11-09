/* eslint-disable no-nested-ternary */
/* eslint-disable no-shadow */
import { useForm } from "@mantine/form";
import { showNotification } from "@mantine/notifications";
import { IconX } from "@tabler/icons";
import { useModalContext } from "../../context/modalContext";
import useAddService from "../../hooks/services/useAddService";
import useGetService from "../../hooks/services/useGetService";
import useUpdateService from "../../hooks/services/useUpdateService";

export default function useServiceForm(id) {
  const { data } = useGetService(id);
  const { mutate: addService, isLoading: adding } = useAddService();
  const { mutate: updateService, isLoading: updating } = useUpdateService();

  const loading = adding || updating;

  const { addServiceModal } = useModalContext();
  const [, { close }] = addServiceModal;

  const form = useForm({
    initialValues: {
      name: data?.name || "",
      short: data?.short || "",
      description: data?.description || "",
    },
    validate: {
      name: (value) => (value === "" ? "Service name is required" : null),
      short: (value) =>
        value === "" ? "short Description is Required" : value.length > 100 ? "Maximum 100 character please" : null,
      description: (value) => (value.length < 100 ? "Description should at least be 100 characters" : null),
    },
  });
  const { onSubmit, reset } = form;
  const errorHandler = () => {
    showNotification({
      icon: <IconX size={18} />,
      color: "red",
      title: `Server Side Error`,
      message: "There was some server side error Please try again later",
    });
  };
  const successHandler = (m) => {
    showNotification({ title: `Service has been ${m} successfully` });
    reset();
    close();
  };

  const submitHandler = (e) => {
    onSubmit((d) => {
      const data = { ...d, createdAt: new Date() };
      if (id) {
        updateService({ ...data, _id: id }, { onError: errorHandler, onSuccess: () => successHandler("updated") });
      } else {
        addService(data, {
          onError: errorHandler,
          onSuccess: () => successHandler("added"),
        });
      }
    })(e);
  };
  return { ...form, submitHandler, loading };
}
