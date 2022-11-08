import { Divider, Group, Stack, Text, Title } from "@mantine/core";
import { IconDental } from "@tabler/icons";

export default function Logo({ m }) {
  return (
    <Group spacing={m && 3} to="/" className="text-xl font-bold no-underline text-main-6 space-y-0 duration-500">
      <IconDental className={m ? "w-10 h-10 sm:w-12 sm:h-12" : "w-16 h-16 sm:h-20 sm:w-20"} />
      {m || <Divider orientation="vertical" color="primary" />}
      <Stack spacing={0}>
        <Title className={m ? "text-xl sm:text-2xl" : "text-3xl sm:text-4xl"}>Pro Dentist</Title>
        <Text className={m ? "hidden" : "text-sm sm:text-lg"}>Smile Like Never Before</Text>
      </Stack>
    </Group>
  );
}
