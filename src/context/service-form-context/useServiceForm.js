/* eslint-disable no-nested-ternary */
/* eslint-disable no-shadow */
import { useForm } from "@mantine/form";
import { showNotification } from "@mantine/notifications";
import useAddService from "../../hooks/services/useAddService";
import useGetService from "../../hooks/services/useGetService";
import useUpdateService from "../../hooks/services/useUpdateService";
import { useModalContext } from "../modalContext";

export default function useServiceForm(id) {
  // services
  const { data: service } = useGetService(id);

  // add service hook
  const { mutate: addService, isLoading: adding } = useAddService();

  // update service hook
  const { mutate: updateService, isLoading: updating } = useUpdateService();

  // add service modal context
  const { addServiceModal } = useModalContext();
  const [, { close }] = addServiceModal;

  // all loading states
  const loading = adding || updating;

  // form object
  const form = useForm({
    // initial form values
    initialValues: {
      name: service?.name || "",
      price: service?.price || "",
      short: service?.short || "",
      description: service?.description || "",
      imageLink: service?.imageLink || "",
    },

    // form validation
    validate: {
      name: (value) => (value === "" ? "Service name is required" : null),
      price: (value) => (value === "" ? "Price is Required" : null),
      short: (value) =>
        value === "" ? "short Description is Required" : value.length > 100 ? "Maximum 100 character please" : null,
      description: (value) => (value.length < 100 ? "Description should at least be 100 characters" : null),
      imageLink: (value) => (value === "" ? "Image Link is required" : null),
    },
  });
  const { onSubmit, reset } = form;

  // success handler function
  const successHandler = (m) => {
    showNotification({ title: `Service has been ${m} successfully` });
    reset();
    close();
  };

  // submit handler
  const submitHandler = (e) => {
    onSubmit((d) => {
      const data = { ...d, createdAt: new Date() };

      if (id) {
        // update service
        updateService({ ...data, id }, { onSuccess: () => successHandler("updated") });
      } else {
        // add service
        addService(data, {
          onSuccess: () => successHandler("added"),
        });
      }
    })(e);
  };

  return { ...form, submitHandler, loading };
}
