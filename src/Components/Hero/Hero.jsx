import "./Hero.scss";

export const Hero = () => {
  return (
    <section className="hero-section">
      <div className="image-area"></div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-6">
            <div className="text-area">
              <h1>
                Best Design of <span>Furniture Collections</span>
              </h1>
              <div className="w-75">
                <p>
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia.
                </p>
                <button>Discover</button>
              </div>
            </div>
          </div>
          <div className="col-lg-6"></div>
        </div>
      </div>
    </section>
  );
};
