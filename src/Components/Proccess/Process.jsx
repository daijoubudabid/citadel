import "./Process.scss";

export const Process = () => {
  return (
    <section className="process-section">
      <div className="container">
        <div className="row justify-content-center">
          <div
            className="col-md-8 mb-5"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once={true}
          >
            <div className="title">
              <span>Production Flows</span>
              <h2>How it Works</h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center g-0">
          <div
            className="col-md-4"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once={true}
            data-aos-delay="200"
          >
            <div className="process one">
              <div className="icon">
                <div className="number">
                  <small>01</small>
                </div>
                <img src="/calculator.png" alt="" draggable={false} />
              </div>
              <div className="text">
                <h2>Delivery & Assembly</h2>
                <p className="">
                  Far far away, behind the word mountains, far from the
                  countries Vokalia.
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-md-4"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once={true}
            data-aos-delay="200"
          >
            <div className="process two">
              <div className="icon two">
                <div className="number">
                  <small>02</small>
                </div>
                <img src="/production.png" alt="" draggable={false} />
              </div>
              <div className="text">
                <h2>Delivery & Assembly</h2>
                <p className="">
                  Far far away, behind the word mountains, far from the
                  countries Vokalia.
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-md-4"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once={true}
            data-aos-delay="200"
          >
            <div className="process three">
              <div className="icon">
                <div className="number">
                  <small>03</small>
                </div>
                <img src="/package.png" alt="" draggable={false} />
              </div>
              <div className="text">
                <h2>Delivery & Assembly</h2>
                <p className="">
                  Far far away, behind the word mountains, far from the
                  countries Vokalia.
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-md-12"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once={true}
            data-aos-delay="200"
          >
            <div className="buttons">
              <p>
                <a href="#">Learn More</a>
                <a href="#">Get A Request</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
