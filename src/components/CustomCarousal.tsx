import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

interface CustomCarouselProps {
  children: React.ReactNode;
}

const CustomCarousel: React.FC<CustomCarouselProps> = ({ children }) => {
  return (
    <Carousel responsive={responsive} swipeable={true} autoPlay={true} autoPlaySpeed={2000} ssr={true}  keyBoardControl={true} removeArrowOnDeviceType={["tablet", "mobile"]}>
      {children}
    </Carousel>
  );
};

export default CustomCarousel;
