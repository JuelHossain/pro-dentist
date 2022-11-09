/* eslint-disable no-underscore-dangle */
import { Stack, Text, Title } from "@mantine/core";
import { Link } from "react-router-dom";
import useGetServices from "../../../hooks/services/useGetServices";

export default function OtherService({ id }) {
  const { data } = useGetServices(0, 6);
  const services = data?.map((s) => {
    const { name, _id } = s;
    return (
      s._id === id || (
        <Text
          className="uppercase  bg-main-5/10 px-4 py-2 rounded underline-offset-4"
          component={Link}
          key={_id}
          to={`/services/${_id}`}
        >
          {name}
        </Text>
      )
    );
  });
  return (
    <Stack className="hidden sm:flex">
      <Title order={4}> Checkout More Services</Title>
      {services}
    </Stack>
  );
}
