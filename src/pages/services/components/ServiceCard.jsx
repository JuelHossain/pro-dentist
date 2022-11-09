import { Button, Card, createStyles, Text } from "@mantine/core";
import { IconArrowUpRight, IconDentalBroken } from "@tabler/icons";
import { Link } from "react-router-dom";

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
  const { name, short, _id } = service;
  const { classes, theme, cx } = useStyles();

  return (
    <Card
      shadow="md"
      radius="md"
      className={cx(classes.card, "relative")}
      p="xl"
      component={Link}
      to={`/services/${_id}`}
    >
      <Button variant="light" className="absolute top-5 right-5" compact rightIcon={<IconArrowUpRight />}>
        Details
      </Button>
      <IconDentalBroken size={50} stroke={2} color={theme.fn.primaryColor()} />

      <Text size="lg" weight={500} className={cx(classes.cardTitle, "uppercase")} mt="md">
        {name}
      </Text>
      <Text size="sm" color="dimmed" mt="sm">
        {short}
      </Text>
    </Card>
  );
}
