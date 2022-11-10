/* eslint-disable no-shadow */
import { showNotification } from "@mantine/notifications";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase";
import useAddReview from "../../hooks/reviews/useAddReview";
import useUpdateReview from "../../hooks/reviews/useUpdateReview";
import { useModalContext } from "../modalContext";
import { useServiceContext } from "../serviceContext";

export default function useSubmitHandler({ onSubmit, data, serviceId, id }) {
  const [user] = useAuthState(auth);
  const { email, photoURL, displayName } = user ?? {};
  const { reviews } = useServiceContext();
  const { refetch: refetchAllReviews } = reviews ?? {};
  const { refetch: refetchThisReview } = data ?? {};

  const { mutate: addReview } = useAddReview();
  const { mutate: updateReview } = useUpdateReview();

  const successHandler = (m) => {
    showNotification({
      title: `Rating ${m}`,
      message: "Thank you for your rating",
    });
    refetchAllReviews();
    refetchThisReview();
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
            { patch: d, id },
            {
              onSuccess: () => successHandler("updated"),
            },
          );
        } else {
          addReview(rating, {
            onSuccess: () => successHandler("added"),
          });
        }
      })(e);
    } else {
      e.preventDefault();
      open();
    }
  };
  return submitHandler;
}
