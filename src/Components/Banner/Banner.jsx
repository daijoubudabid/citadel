/* eslint-disable react/prop-types */
import { FaChevronRight } from "react-icons/fa";
import "./Banner.scss";

export const Banner = ({pageLink, pageTitle}) => {
  return (
    <section className="banner-section">
      <div className="container">
        <div className="row no-gutters banner-text align-items-end justify-content-center">
          <div className="col-md-9 text-center mb-5">
            <p>
              <span className="me-2">
                <a href="/">
                  Home<FaChevronRight />
                </a>
              </span>
              <span>
                {pageLink}<FaChevronRight />
              </span>
            </p>
            <h1 className="mb-0">{pageTitle}</h1>
          </div>
        </div>
      </div>
    </section>
  );
};
