/* eslint-disable no-underscore-dangle */
import { Container } from "@mantine/core";
import useSetPageTitle from "../../hooks/shared/useSetPageTitle";
import Heading from "./components/Heading";
import SeeAllButton from "./components/SeeAllButton";
import ServiceList from "./components/ServiceList";

export default function Services(props) {
  useSetPageTitle("Services");

  return (
    <Container size="lg" py={40}>
      <Heading />
      <ServiceList {...props} />
      <SeeAllButton {...props} />
    </Container>
  );
}
