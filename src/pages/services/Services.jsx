/* eslint-disable no-underscore-dangle */
import { Container } from "@mantine/core";
import Heading from "./components/Heading";
import ServiceList from "./components/ServiceList";

export default function FeaturesCards() {
  return (
    <Container size="lg" py={40}>
      <Heading />
      <ServiceList />
    </Container>
  );
}
