/* eslint-disable no-underscore-dangle */
import { LoadingOverlay, SimpleGrid } from "@mantine/core";
import useGetServices from "../../../hooks/services/useGetServices";
import ServiceCard from "./ServiceCard";

export default function ServiceList({ page, size }) {
  const { data, isLoading } = useGetServices(page, size);

  const services = data?.map((service) => <ServiceCard key={Math.random()} service={service} />);

  return (
    <SimpleGrid cols={3} spacing="xl" mt={50} breakpoints={[{ maxWidth: "md", cols: 1 }]}>
      {services}
      <LoadingOverlay visible={isLoading} />
    </SimpleGrid>
  );
}
