/* eslint-disable no-shadow */
import { useForm } from "@mantine/form";
import { useEffect } from "react";
import useGetReview from "../../hooks/reviews/useGetReview";
import useSubmitHandler from "./useSubmitHandler";

export default function useReviewForm(serviceId, email) {
  const data = useGetReview(serviceId, email);
  const { rating, sayings, _id } = data.data ?? {};

  const form = useForm({
    initialValues: {
      rating: 0,
      sayings: "",
    },
    validate: {
      rating: (value) => (value === 0 ? "Please Rate by stars" : null),
      sayings: (value) => (value.length < 10 ? " " : null),
    },
  });
  const { setValues } = form;

  useEffect(() => {
    if (rating && sayings) {
      setValues({ rating, sayings });
    } else {
      setValues({ rating: 0, sayings: "" });
    }
  }, [rating, sayings, setValues]);

  const submitHandler = useSubmitHandler({ ...form, data, id: _id, serviceId });

  return { ...form, submitHandler, data };
}
