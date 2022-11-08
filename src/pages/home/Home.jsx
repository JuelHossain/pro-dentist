import { Box } from "@mantine/core";
import Contact from "../../components/contact/contact";
import Banner from "./Banner";

export default function Home() {
  return (
    <Box className=" my-5 md:my-10 space-y-10 md:space-y-20">
      <Banner />
      <Contact />
    </Box>
  );
}
