/* eslint-disable no-nested-ternary */
/* eslint-disable no-shadow */
import { useForm } from "@mantine/form";
import { showNotification } from "@mantine/notifications";
import { useEffect } from "react";
import useAddService from "../../hooks/services/useAddService";
import useUpdateService from "../../hooks/services/useUpdateService";
import useImageUpload from "../../hooks/shared/useImageUpload";
import { useModalContext } from "../modalContext";
import { useServiceContext } from "../serviceContext";

export default function useServiceForm(id) {
  // services
  const { data: service, refetch } = useServiceContext();

  // image upload
  const [uploadImage, uploading] = useImageUpload();

  // add service hook
  const { mutate: addService, isLoading: adding } = useAddService();

  // update service hook
  const { mutate: updateService, isLoading: updating } = useUpdateService();

  // add service modal context
  const { addServiceModal, updateServiceModal } = useModalContext();
  const [, { close: closeAdd }] = addServiceModal;
  const [, { close: closeUpdate }] = updateServiceModal;

  // all loading states
  const loading = adding || updating;

  // form object
  const form = useForm({
    // initial form values
    initialValues: {
      name: "",
      cost: "",
      short: "",
      description: "",
      imageLink: "",
    },

    // form validation
    validate: {
      name: (value) => (value === "" ? "Service name is required" : null),
      cost: (value) => (value === "" ? "Service cost is Required" : null),
      short: (value) =>
        value === "" ? "short Description is Required" : value.length > 100 ? "Maximum 100 character please" : null,
      description: (value) => (value.length < 100 ? "Description should at least be 100 characters" : null),
      imageLink: (value) => (value === "" ? "Image Link is required" : null),
    },
  });
  const { onSubmit, reset, setValues } = form;

  useEffect(() => {
    if (service) {
      const { _id, ...serviceData } = service;
      setValues(serviceData);
    }
  }, [service, setValues]);

  // success handler function
  const successHandler = (m) => {
    showNotification({ title: `Service has been ${m} successfully` });
    if (m === "added") reset();
    closeAdd();
    closeUpdate();
    refetch();
  };

  // submit handler
  const submitHandler = (e) => {
    if (!uploading) {
      onSubmit((d) => {
        const data = { ...d, createdAt: new Date() };

        if (id) {
          // update service
          updateService({ patch: data, id }, { onSuccess: () => successHandler("updated") });
        } else {
          // add service
          addService(data, {
            onSuccess: () => successHandler("added"),
          });
        }
      })(e);
    } else {
      e.preventDefault();
    }
  };

  return { ...form, submitHandler, loading, uploadImage, uploading };
}
