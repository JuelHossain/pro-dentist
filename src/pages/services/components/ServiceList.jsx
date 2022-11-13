/* eslint-disable no-underscore-dangle */
import { LoadingOverlay, SimpleGrid } from "@mantine/core";
import useGetServices from "../../../hooks/services/useGetServices";
import SeeAllButton from "./SeeAllButton";
import ServiceCard from "./service-card/ServiceCard";

export default function ServiceList(props) {
  const { page, size } = props;
  const { data, isLoading } = useGetServices(page, size);

  const services = data?.map((service) => <ServiceCard key={Math.random()} {...service} />);

  return (
    <SimpleGrid
      cols={4}
      breakpoints={[
        { maxWidth: "xl", cols: 3 },
        { maxWidth: "md", cols: 2 },
        { maxWidth: "sm", cols: 1 },
      ]}
    >
      {services}
      <LoadingOverlay visible={isLoading} />
      <SeeAllButton {...props} />
    </SimpleGrid>
  );
}
