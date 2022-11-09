/* eslint-disable no-shadow */
import { useForm } from "@mantine/form";
import { showNotification } from "@mantine/notifications";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useModalContext } from "../../../context/modalContext";
import auth from "../../../firebase";
import useAddReview from "../../../hooks/reviews/useAddReview";
import useGetReview from "../../../hooks/reviews/useGetReview";
import useUpdateReview from "../../../hooks/reviews/useUpdateReview";

export default function useReviewsForm(serviceId) {
  const [user] = useAuthState(auth);
  const { email, photoURL, displayName } = user ?? {};

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
  const { onSubmit, setValues } = form;

  useEffect(() => {
    if (rating && sayings) {
      setValues({ rating, sayings });
    } else {
      setValues({ rating: 0, sayings: "" });
    }
  }, [rating, sayings, setValues]);
  const { mutate: addReview } = useAddReview();
  const { mutate: updateReview } = useUpdateReview();
  const queryClient = useQueryClient();

  const errorHandler = () => {
    showNotification({
      title: "Server Side Error",
      message: "There was an server side error",
    });
  };
  const successHandler = (m) => {
    showNotification({
      title: `Rating ${m}`,
      message: "Thank you for your rating",
    });
  };

  const settledHandler = () => {
    queryClient.invalidateQueries(["get-review", serviceId, email]);
  };

  const { authModal } = useModalContext();
  const [, { open }] = authModal;

  const submitHandler = (e) => {
    if (email) {
      const userDetails = { email, photoURL, displayName };
      onSubmit((d) => {
        const rating = { ...d, serviceId, userDetails, ratedAt: new Date(), ratingBy: email };
        if (data.data) {
          updateReview(
            { patch: d, id: _id },
            {
              onError: errorHandler,
              onSuccess: () => successHandler("updated"),
              onSettled: settledHandler,
            },
          );
        } else {
          addReview(rating, {
            onError: errorHandler,
            onSuccess: () => successHandler("added"),
            onSettled: settledHandler,
          });
        }
      })(e);
    } else {
      e.preventDefault();
      open();
    }
  };
  return { ...form, submitHandler, data };
}
