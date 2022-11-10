/* eslint-disable no-nested-ternary */
import { ReviewFormProvider } from "../../../context/review-form-context/reviewFormContext";
import Form from "./components/Form";
import Heading from "./components/Heading";
import Ratings from "./components/Ratings";
import Sayings from "./components/Sayings";
import SubmitButton from "./components/SubmitButton";

export default function ReviewForm({ id }) {
  return (
    <ReviewFormProvider id={id}>
      <Form>
        <Heading />
        <Ratings />
        <Sayings />
        <SubmitButton />
      </Form>
    </ReviewFormProvider>
  );
}
