import "./AboutTwo.scss";

export const AboutTwo = () => {
  return (
    <section className="aboutTwo-section">
      <div className="container-xl">
        <div className="row g-lg-5">
          <div
            className="col-lg-6 d-flex align-items-stretch"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once={true}
          >
            <div className="image d-none d-lg-block"></div>
          </div>
          <div
            className="col-lg-6 d-flex align-items-center"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once={true}
            data-aos-delay="200"
          >
            <div className="text mt-0 my-lg-5 py-5">
              <span>About Furnish</span>
              <h2 className="mb-4">
                More than 20k Trusted Our Furniture Industry
              </h2>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language ocean.
              </p>
              <p>
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia. It is a paradisematic country, in
                which roasted parts of sentences fly into your mouth.
              </p>

              <p className="mt-5">
                <a href="#">Learn More</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
