import { Divider, Group, Stack, Text, Title } from "@mantine/core";
import { IconDental } from "@tabler/icons";

export default function Logo() {
  return (
    <Group to="/" className="text-xl font-bold no-underline text-main-6 space-y-0">
      <IconDental className="w-16 h-16 sm:h-20 sm:w-20" />
      <Divider orientation="vertical" color="primary" />
      <Stack spacing={0}>
        <Title className="text-3xl sm:text-4xl">Pro Dentist</Title>
        <Text className="text-sm sm:text-lg">Smile Like Never Before</Text>
      </Stack>
    </Group>
  );
}
