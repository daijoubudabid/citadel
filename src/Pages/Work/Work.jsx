import { Banner } from "../../Components/Banner/Banner";
import { Collection } from "../../Components/Collection/Collection";
import { Pagination } from "../../Components/Pagination/Pagination";

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
  {
    src: "/gallery-7.jpg",
    width: 1000,
    height: 1000,
    colSize: 4,
  },
  {
    src: "/gallery-8.jpg",
    width: 1000,
    height: 1000,
    colSize: 4,
  },
  {
    src: "/gallery-9.jpg",
    width: 1000,
    height: 1000,
    colSize: 4,
  },
];

const Work = () => {
  return (
    <div>
      <Banner pageLink={"Work"} pageTitle={"Our Collections"} />
      <Collection
        photos={photos}
        subTitle={"Our Finished Projects"}
        title={"Furniture Collection"}
      />
      <Pagination />
    </div>
  );
};

export default Work;
