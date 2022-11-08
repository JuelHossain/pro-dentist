import { ActionIcon, Button, createStyles, Group, SimpleGrid, Text, Textarea, TextInput, Title } from "@mantine/core";
import { useForm } from "@mantine/form";
import { randomId } from "@mantine/hooks";
import { showNotification } from "@mantine/notifications";
import { IconBrandInstagram, IconBrandTwitter, IconBrandYoutube } from "@tabler/icons";
import { useMatch } from "react-router-dom";
import { ContactIconsList } from "./ContactIcons";

const useStyles = createStyles((theme) => ({
  wrapper: {
    minHeight: 400,
    boxSizing: "border-box",
    backgroundImage: `linear-gradient(-60deg, ${theme.colors[theme.primaryColor][4]} 0%, ${
      theme.colors[theme.primaryColor][7]
    } 100%)`,
    borderRadius: theme.radius.md,
    padding: theme.spacing.xl * 2.5,

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      padding: theme.spacing.xl * 1.5,
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    color: theme.white,
    lineHeight: 1,
  },

  description: {
    color: theme.colors[theme.primaryColor][0],
    maxWidth: 300,

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      maxWidth: "100%",
    },
  },

  form: {
    backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
    padding: theme.spacing.xl,
    borderRadius: theme.radius.md,
    boxShadow: theme.shadows.lg,
  },

  social: {
    color: theme.white,

    "&:hover": {
      color: theme.colors[theme.primaryColor][1],
    },
  },

  control: {
    backgroundColor: theme.colors[theme.primaryColor][6],
  },
}));

const social = [IconBrandTwitter, IconBrandYoutube, IconBrandInstagram];

export default function ContactUs() {
  const { classes } = useStyles();
  const matches = useMatch("/contact");

  const icons = social.map((Icon) => (
    <ActionIcon key={randomId()} size={28} className={classes.social} variant="transparent">
      <Icon size={22} stroke={1.5} />
    </ActionIcon>
  ));

  const { onSubmit, getInputProps, reset } = useForm({
    initialValues: {
      email: "",
      name: "",
      message: "",
    },
  });

  const submitHandler = (e) => {
    onSubmit(() => {
      showNotification({
        title: "Your Message Has Been Sent",
        message: "We Will contact You very soon",
      });
      reset();
    })(e);
  };
  return (
    <div className={`${classes.wrapper} ${matches && "mt-10 md:mt-20"}`}>
      <SimpleGrid cols={2} spacing={50} breakpoints={[{ maxWidth: "sm", cols: 1 }]}>
        <div>
          <Title className={classes.title}>Contact us</Title>
          <Text className={classes.description} mt="sm" mb={30}>
            Leave your email and we will get back to you within 24 hours
          </Text>

          <ContactIconsList variant="white" />

          <Group mt="xl">{icons}</Group>
        </div>
        <form className={classes.form} onSubmit={submitHandler}>
          <TextInput label="Email" placeholder="your@email.com" required {...getInputProps("email")} type="email" />
          <TextInput label="Name" placeholder="John Doe" mt="md" {...getInputProps("name")} />
          <Textarea
            required
            label="Your message"
            placeholder="I want to enroll in a course"
            minRows={4}
            mt="md"
            {...getInputProps("message")}
          />

          <Group position="right" mt="md">
            <Button type="submit" className={classes.control}>
              Send message
            </Button>
          </Group>
        </form>
      </SimpleGrid>
    </div>
  );
}
