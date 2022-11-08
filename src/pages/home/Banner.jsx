import { Button, createStyles, Group, List, Text, ThemeIcon, Title } from "@mantine/core";
import { IconCheck } from "@tabler/icons";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase";

const useStyles = createStyles((theme) => ({
  title: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 44,
    lineHeight: 1.2,
    fontWeight: 900,

    [theme.fn.smallerThan("xs")]: {
      fontSize: 28,
    },
  },

  control: {
    [theme.fn.smallerThan("xs")]: {
      flex: 1,
    },
  },

  highlight: {
    position: "relative",
    backgroundColor: theme.fn.variant({ variant: "light", color: theme.primaryColor }).background,
    borderRadius: theme.radius.sm,
    padding: "4px 12px",
  },
}));

export default function Banner() {
  const { classes } = useStyles();
  const [user] = useAuthState(auth);
  return (
    <div className="flex justify-between gap-10 mt-10 md:mt-20 lg:mt-32 ">
      <div className="flex-1 pl-5 sm:pl-10 md:pl-20 lg:pl-28 ">
        <Title className={classes.title}>
          A <span className={classes.highlight}>Development</span> Journey <br /> You will never forget
        </Title>
        <Text color="dimmed" mt="md">
          We will make you fill that programming was never that easy, we will make you a complete web developer in less
          than a month. hey maybe you are thinking that's not possible but it is
        </Text>

        <List
          mt={30}
          spacing="sm"
          size="sm"
          icon={
            <ThemeIcon size={20} radius="xl">
              <IconCheck size={12} stroke={1.5} />
            </ThemeIcon>
          }
        >
          <List.Item>
            <b>Flexible Timing</b> – watch videos whenever you have time.
          </List.Item>
          <List.Item>
            <b>World class Teachers</b> – the instructors of courses are world class teachers
          </List.Item>
          <List.Item>
            <b>No annoying lectures</b> – We cut the annoying explanations and focused on the main thing instead.
          </List.Item>
        </List>

        <Group mt={30}>
          <Button component={Link} to={user ? "/courses" : "/login"} radius="xl" size="md" className={classes.control}>
            Get started
          </Button>
          <Button component={Link} to="/courses" variant="default" radius="xl" size="md" className={classes.control}>
            See Courses
          </Button>
        </Group>
      </div>
      <div className="flex-1 hidden md:flex pb-20 max-h-[50vh]">
        <img
          alt="banner"
          src="https://ui.mantine.dev/_next/static/media/image.9a65bd94.svg"
          className="h-full w-full object-contain"
        />
      </div>
    </div>
  );
}
