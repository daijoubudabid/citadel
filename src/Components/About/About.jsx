import { FaPlay } from "react-icons/fa";
import "./About.scss";

export const About = () => {
  return (
    <section className="about-section">
      <div className="container">
        <div className="row justify-content-end">
          <div className="col-md-6" data-aos="fade-up" data-aos-duration="1000" data-aos-once={true}>
            <div className="text-area">
              <span>About Furnish</span>
              <h2>Quality Makes the Belief for Customers</h2>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language ocean.
              </p>
              <a href="#" className="pt-4">
                <div className="icon">
                  <span>
                    <FaPlay />
                  </span>
                </div>
                <div className="text ps-4">
                  <h6>Watch Video</h6>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
