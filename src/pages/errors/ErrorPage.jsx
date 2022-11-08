import { Button, Container, createStyles, Group, Text, Title } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  root: {
    height: "100vh",
    paddingTop: 80,
    paddingBottom: 120,
    backgroundColor: theme.fn.variant({ variant: "light", color: theme.primaryColor }).background,
  },

  label: {
    textAlign: "center",
    fontWeight: 900,
    fontSize: 220,
    lineHeight: 1,
    marginBottom: theme.spacing.xl * 1.5,
    color: theme.colors[theme.primaryColor][3],

    [theme.fn.smallerThan("sm")]: {
      fontSize: 120,
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    textAlign: "center",
    fontWeight: 900,
    fontSize: 38,
    color: theme.colorScheme==='dark'?theme.white:theme.colors.main[5],

    [theme.fn.smallerThan("sm")]: {
      fontSize: 32,
    },
  },

  description: {
    maxWidth: 540,
    margin: "auto",
    marginTop: theme.spacing.xl,
    marginBottom: theme.spacing.xl * 1.5,
    color: theme.colors[theme.primaryColor][5],
  },
}));

export default function ErrorPage() {
  const { classes } = useStyles();

  return (
    <div className={classes.root}>
      <Container>
        <div className={classes.label}>500</div>
        <Title className={classes.title}>Something bad just happened...</Title>
        <Text size="lg" align="center" className={classes.description}>
          Our servers could not handle your request. Don&apos;t worry, our development team was already notified. Try
          refreshing the page.
        </Text>
        <Group position="center">
          <Button
            onClick={() => {
              window.location.reload();
            }}
            variant="white"
            size="md"
          >
            Refresh the page
          </Button>
        </Group>
      </Container>
    </div>
  );
}
