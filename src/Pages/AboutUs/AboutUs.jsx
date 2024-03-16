import { AboutTwo } from "../../Components/AboutTwo/AboutTwo";
import { Banner } from "../../Components/Banner/Banner";
import { Counter } from "../../Components/Counter/Counter";
import { Testimonial } from "../../Components/Testimonial/Testimonial";

const AboutUs = () => {
  return (
    <section className="about-us-section">
      <Banner pageLink={"About Us"} pageTitle={"About Us"} />
      <AboutTwo />
      <Counter />
      <Testimonial />
    </section>
  );
};

export default AboutUs;
