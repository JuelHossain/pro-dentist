import { Badge, createStyles, Group, Text, Title } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  title: {
    fontSize: 34,
    fontWeight: 900,
    [theme.fn.smallerThan("sm")]: {
      fontSize: 24,
    },
  },

  description: {
    maxWidth: 600,
    margin: "auto",

    "&::after": {
      content: '""',
      display: "block",
      backgroundColor: theme.fn.primaryColor(),
      width: 45,
      height: 2,
      marginTop: theme.spacing.sm,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
}));

export default function Heading() {
  const { classes } = useStyles();
  return (
    <>
      <Group position="center">
        <Badge variant="filled" size="lg">
          Dental Services We Provide
        </Badge>
      </Group>

      <Title order={2} className={classes.title} align="center" mt="sm">
        Please Checkout our services below
      </Title>

      <Text color="dimmed" className={classes.description} align="center" mt="md">
        Select your desired service and book an appointment now. if you have taken any of those service already please
        provide a review . we will be glad to know what you think about us.
      </Text>
    </>
  );
}
