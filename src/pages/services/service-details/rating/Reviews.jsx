import { Container, Stack, Text, Title } from "@mantine/core";

import ReviewCarousel from "./components/ReviewCarousel";

export default function Reviews({ serviceId }) {
  return (
    <Stack>
      <Container size="xs">
        <Title order={3} align="center">
          What Our Customer's are saying?
        </Title>
        <Text align="center">
          You can give us a rating too. please give us a rating from the left corner of this page.
        </Text>
      </Container>
      <ReviewCarousel serviceId={serviceId} />
    </Stack>
  );
}
