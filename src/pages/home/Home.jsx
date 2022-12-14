import { Box } from "@mantine/core";
import Contact from "../../components/contact/contact";
import Schedule from "../../components/schedule/Schedule";
import useSetPageTitle from "../../hooks/shared/useSetPageTitle";
import Services from "../services/Services";
import Banner from "./Banner";

export default function Home() {
  useSetPageTitle("Home");

  return (
    <Box className="space-y-10 md:space-y-20">
      <Banner />
      <Services page={0} size={3} home={1} />
      <Schedule />
      <Contact />
    </Box>
  );
}
