import { Button, Container, createStyles, Overlay, Stack, Text, Title } from "@mantine/core";
import { Link } from "react-router-dom";

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: "relative",
    paddingTop: 220,
    paddingBottom: 130,
    minHeight: "75vh",
    backgroundImage:
      "url(https://www.mouthhealthy.org/-/media/project/ada-organization/ada/mouthhealthy/images/femaledentist_1110x700.jpg?rev=fec27156dea6444c94b0295f5f057850&w=1306&hash=3A2C948C46A041C02D4D85275B67CAA5)",
    backgroundSize: "cover",
    backgroundPosition: "center",

    "@media (max-width: 575px)": {
      paddingTop: 80,
      paddingBottom: 50,
      backgroundPosition: "right",
      backgroundPositionX: 500,
    },
  },

  highlight: {
    color: theme.colors[theme.primaryColor][4],
  },

  control: {
    height: 42,
    fontSize: theme.fontSizes.md,

    "&:not(:first-of-type)": {
      marginLeft: theme.spacing.md,
    },

    "@media (max-width: 600px)": {
      "&:not(:first-of-type)": {
        marginTop: theme.spacing.md,
        marginLeft: 0,
      },
    },
  },

  secondaryControl: {
    color: theme.white,
    backgroundColor: "rgba(255, 255, 255, .4)",

    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, .45) !important",
    },
  },
}));

export default function Banner() {
  const { classes, cx } = useStyles();

  return (
    <div className={classes.wrapper}>
      <Overlay color="#000" opacity={0.65} zIndex={1} />

      <Stack className="z-10 relative">
        <Title className="sm:text-center sm:text-6xl text-4xl font-black px-5 text-center xs:text-left">
          <Text component="span" inherit className={classes.highlight}>
            Dr. Tanzinia Sara
          </Text>
        </Title>

        <Container size={640}>
          <Text size="lg" className="sm:text-xl text-neu-1 sm:text-center px-2 text-center xs:text-left">
            I am The dentist you will be visiting. please checkout our services before coming and book an appointment
          </Text>
        </Container>

        <div className="flex sm:justify-center  px-5 xs:flex-row flex-col">
          <Button component={Link} to="/services" className={classes.control} variant="white" size="lg">
            Services
          </Button>
          <Button component={Link} to="/blog" className={cx(classes.control, classes.secondaryControl)} size="lg">
            Blog
          </Button>
        </div>
      </Stack>
    </div>
  );
}
