import { About } from "../../Components/About/About";
import { Blog } from "../../Components/Blog/Blog";
import { Collection } from "../../Components/Collection/Collection";
import { Counter } from "../../Components/Counter/Counter";
import { Hero } from "../../Components/Hero/Hero";
import { Process } from "../../Components/Proccess/Process";
import { Service } from "../../Components/Service/Service";
import { Testimonial } from "../../Components/Testimonial/Testimonial";

const photos = [
  {
    src: "/gallery-1.jpg",
    width: 550,
    height: 600,
    colSize: 3,
  },
  {
    src: "/gallery-2.jpg",
    width: 650,
    height: 600,
    colSize: 3,
  },
  {
    src: "/gallery-3.jpg",
    width: 1000,
    height: 600,
    colSize: 6,
  },
  {
    src: "/gallery-4.jpg",
    width: 1000,
    height: 600,
    colSize: 5,
  },
  {
    src: "/gallery-5.jpg",
    width: 800,
    height: 600,
    colSize: 3,
  },
  {
    src: "/gallery-6.jpg",
    width: 1000,
    height: 1000,
    colSize: 4,
  },
];

const blogs = [
  {
    title: "Shop the Look Cottage Country Living Room",
    text: "A small river named Duden flows by their place.",
    image: "/image-1.jpg",
  },
  {
    title: "Shop the Look Cottage Country Living Room",
    text: "A small river named Duden flows by their place.",
    image: "/image-2.jpg",
  },
  {
    title: "Shop the Look Cottage Country Living Room",
    text: "A small river named Duden flows by their place.",
    image: "/image-3.jpg",
    rowReverse: "flex-lg-row-reverse",
  },
  {
    title: "Shop the Look Cottage Country Living Room",
    text: "A small river named Duden flows by their place.",
    image: "/image-4.jpg",
    rowReverse: "flex-lg-row-reverse",
  },
];

const Home = () => {
  return (
    <div>
      <Hero />
      <Service />
      <About />
      <Collection
        photos={photos}
        subTitle={"Our Finished Projects"}
        title={"Furniture Collection"}
      />
      <Counter />
      <Testimonial />
      <Process />
      <Blog blogs={blogs} />
    </div>
  );
};

export default Home;