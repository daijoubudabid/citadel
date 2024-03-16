/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import "./Collection.scss";

export const Collection = ({ photos, subTitle, title }) => {
  const [index, setIndex] = useState(-1);

  const handleImageClick = (imageIndex) => {
    setIndex(imageIndex);
  };

  return (
    <section className="collections-section">
      <div className="container-fluid">
        <div className="row justify-content-center mb-5">
          <div
            className="col-lg-6"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once={true}
          >
            <div className="title">
              <span>{subTitle}</span>
              <h2 className="mb-4">{title}</h2>
            </div>
          </div>
        </div>
        <div className="row g-2">
          {photos.map((photo, photoIndex) => (
            <div
              key={photoIndex}
              className={`col-md-${photo.colSize} gallery`}
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-once={true}
              data-aos-delay={`${100 * photoIndex}`}
              onClick={() => handleImageClick(photoIndex)}
            >
              <img loading="lazy" draggable={false} src={photo.src} alt="" />
              <div className="text-area">
                <div className="icon">
                  <span>
                    <FaSearch />
                  </span>
                </div>
                <h2>Business Finance Consulting</h2>
              </div>
            </div>
          ))}
        </div>
        <Lightbox
          slides={photos}
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
          plugins={[Fullscreen, Thumbnails, Zoom]}
        />
      </div>
    </section>
  );
};
