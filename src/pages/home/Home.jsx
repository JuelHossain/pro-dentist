import { Box } from "@mantine/core";
import ContactUs from "../../components/contact/contact";
import NewsLetter from "../../components/news-letter/NewsLetter";
import Banner from "./Banner";

export default function Home() {
  return (
    <Box className="my-5 sm:my-10 md:my-20 space-y-10 md:space-y-20">
      <Banner />
      <NewsLetter />
      <ContactUs />
    </Box>
  );
}
