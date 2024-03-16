import { Banner } from "../../Components/Banner/Banner";
import { Collection } from "../../Components/Collection/Collection";
import { Form } from "../../Components/Form/Form";
import Map from "../../Components/Map/Map";

const photos = [
  {
    src: "/gallery-1.jpg",
    width: 550,
    height: 600,
    colSize: 2,
  },
  {
    src: "/gallery-2.jpg",
    width: 650,
    height: 600,
    colSize: 2,
  },
  {
    src: "/gallery-3.jpg",
    width: 1000,
    height: 600,
    colSize: 2,
  },
  {
    src: "/gallery-4.jpg",
    width: 1000,
    height: 600,
    colSize: 2,
  },
  {
    src: "/gallery-5.jpg",
    width: 800,
    height: 600,
    colSize: 2,
  },
  {
    src: "/gallery-6.jpg",
    width: 1000,
    height: 1000,
    colSize: 2,
  },
];

const Contact = () => {
  return (
    <div className="contact-page">
      <Banner pageLink={"Contact"} pageTitle={"Contact Us"} />
      <Map />
      <Form />
      <Collection
        photos={photos}
        subTitle={"Gallery"}
        title={"Latest Collection"}
      />
    </div>
  );
};

export default Contact;
