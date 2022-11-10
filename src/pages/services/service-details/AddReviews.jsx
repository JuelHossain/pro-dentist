/* eslint-disable no-nested-ternary */
import { Button, Group, LoadingOverlay, Rating, Stack, Text, Textarea, Title } from "@mantine/core";
import { useAuthState } from "react-firebase-hooks/auth";
import { useServiceContext } from "../../../context/serviceContext";
import auth from "../../../firebase";
import useReviewsForm from "./useReviewsForm";

export default function AddReviews() {
  const { id } = useServiceContext();
  const { submitHandler, getInputProps, errors, data: { data, isLoading } = {} } = useReviewsForm(id);

  const [user] = useAuthState(auth);

  return (
    <Stack component="form" onSubmit={submitHandler} className="relative  ">
      <LoadingOverlay visible={isLoading} />
      <div>
        <Title order={4}>{data ? "Update Your Review" : "Give us a Review"}</Title>
        <Text>Say something if you took this service</Text>
      </div>
      <Group>
        <Rating {...getInputProps("rating")} size="md" />
        {errors.rating && <p className="text-xs text-red-500">{errors?.rating}</p>}
      </Group>
      <Textarea {...getInputProps("sayings")} placeholder="inspire us with your words " />
      <Group position="right">
        <Button type="submit">{data ? "Update" : user ? "Submit" : "Please Login"}</Button>
      </Group>
    </Stack>
  );
}
