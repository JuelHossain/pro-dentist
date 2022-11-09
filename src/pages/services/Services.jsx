/* eslint-disable no-underscore-dangle */
import { Button, Container, Group } from "@mantine/core";
import { Link } from "react-router-dom";
import Heading from "./components/Heading";
import ServiceList from "./components/ServiceList";

export default function Services({ home, ...props }) {
  return (
    <Container size="lg" py={40}>
      <Heading />
      <ServiceList {...props} />
      {home && (
        <Group position="center" className="mt-5 sm:mt-10">
          <Button component={Link} to="services">
            See All Services
          </Button>
        </Group>
      )}
    </Container>
  );
}
