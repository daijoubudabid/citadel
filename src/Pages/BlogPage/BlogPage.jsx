import { Banner } from "../../Components/Banner/Banner";
import { Blog } from "../../Components/Blog/Blog";
import { Pagination } from "../../Components/Pagination/Pagination";

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
];

const BlogPage = () => {
  return (
    <div>
      <Banner pageLink={"Blog"} pageTitle={"Our Blogs"} />
      <Blog blogs={blogs} padding={"padding"} />
      <Pagination />
    </div>
  );
};

export default BlogPage;
