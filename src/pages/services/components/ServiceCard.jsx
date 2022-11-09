import { Card, createStyles, Text } from "@mantine/core";
import { IconDentalBroken } from "@tabler/icons";

const useStyles = createStyles((theme) => ({
  card: {
    cursor: "pointer",
    border: `1px solid ${theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[1]}`,
  },

  cardTitle: {
    "&::after": {
      content: '""',
      display: "block",
      backgroundColor: theme.fn.primaryColor(),
      width: 45,
      height: 2,
      marginTop: theme.spacing.sm,
    },
  },
}));

export default function ServiceCard({ service }) {
  const { name, short } = service;
  const { classes, theme } = useStyles();

  return (
    <Card shadow="md" radius="md" className={classes.card} p="xl">
      <IconDentalBroken size={50} stroke={2} color={theme.fn.primaryColor()} />

      <Text size="lg" weight={500} className={classes.cardTitle} mt="md">
        {name}
      </Text>
      <Text size="sm" color="dimmed" mt="sm">
        {short}
      </Text>
    </Card>
  );
}
