import { useEffect } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { tns } from "tiny-slider";
import "./Testimonial.scss";

const reviews = [
  {
    name: "Jenniffer",
    img: "/avatar-1.jpg",
    text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    prof: "Marketing Manager",
  },
  {
    name: "Jenniffer",
    img: "/avatar-2.jpg",
    text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    prof: "Marketing Manager",
  },
  {
    name: "Jenniffer",
    img: "/avatar-3.jpg",
    text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    prof: "Marketing Manager",
  },
  {
    name: "Jenniffer",
    img: "/avatar-4.jpg",
    text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    prof: "Marketing Manager",
  },
];

export const Testimonial = () => {
  useEffect(() => {
    let slider = tns({
      container: ".testimonial",
      mode: "carousel",
      controls: false,
      nav: true,
      navAsThumbnails: false,
      navContainer: ".controls",
      autoplayButtonOutput: false,
      autoplayResetOnVisibility: false,
      items: 3,
      center: true,
      mouseDrag: true,
      swipeAngle: false,
      gutter: 20,
      speed: 700,
      touch: true,
      lazyload: true,
      slideBy: "1",
      autoplay: true,
      responsive: {
        992: {
          items: 3,
        },
        600: {
          items: 2,
          center: false,
        },
        0: {
          items: 1,
          center: false,
          navAsThumbnails: true,
        },
      },
    });
    return () => {
      slider.destroy();
    };
  }, []);
  return (
    <section className="testimonial-section">
      <div className="container-xl">
        <div className="row justify-content-center pb-4">
          <div className="col-lg-7" data-aos="fade-up" data-aos-duration="1000" data-aos-once={true}>
            <div className="title">
              <span>Testimonials</span>
              <h2 className="mb-5">Happy Customers</h2>
            </div>
          </div>
        </div>
        <div className="testimonial">
          {reviews.map((item, index) => (
            <div key={index}>
              <div className="review-container" data-aos="fade-up" data-aos-duration="1000" data-aos-once={true} data-aos-delay="200">
                <div className="icon">
                  <FaQuoteLeft />
                </div>
                <div className="review">
                  <p>{item.text}</p>
                  <div className="d-flex align-items-center">
                    <div className="review-img">
                      <img src={item.img} alt="" />
                    </div>
                    <div className="review-text ps-3">
                      <h6 className="mb-0">{item.name}</h6>
                      <span>{item.prof}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="controls" data-aos="fade-up" data-aos-duration="1000" data-aos-once={true}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </section>
  );
};
