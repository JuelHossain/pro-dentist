/* eslint-disable no-underscore-dangle */
import { Carousel } from "@mantine/carousel";
import { useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import useGetReviews from "../../../../../hooks/reviews/useGetReviews";
import NoReviews from "./NoReviews";
import ReviewCard from "./ReviewCard";

export default function ReviewCarousel({ serviceId }) {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm}px)`);

  const { data } = useGetReviews(serviceId);
  const slides = data?.map((item) => (
    <Carousel.Slide className="h-full" key={item._id}>
      <ReviewCard {...item} />
    </Carousel.Slide>
  ));

  return (
    <Carousel
      slideSize="33%"
      breakpoints={[{ maxWidth: "sm", slideSize: "100%", slideGap: 2 }]}
      slideGap="xl"
      align="center"
      slidesToScroll={mobile ? 1 : 2}
      height={166}
    >
      {data?.length === 0 ? <NoReviews /> : slides}
    </Carousel>
  );
}
