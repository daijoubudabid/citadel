import {
  FaCalendarAlt,
  FaFacebookF,
  FaInstagram,
  FaMap,
  FaPhoneAlt,
  FaTelegramPlane,
  FaTwitter,
  FaUserAlt,
} from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Copyright } from "../Copyright/Copyright";
import "./Footer.scss";

export const Footer = () => {
  return (
    <>
      <footer className="footer-section">
        <div className="container-xl">
          <div className="row pb-5 justify-content-between">
            <div className="col-md-6 col-lg">
              <div className="footer mb-4">
                <h2>
                  <a href="/">Citadel.</a>
                </h2>
                <p>
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia.
                </p>
                <ul className="social-icons mt-4">
                  <li>
                    <a href="#">
                      <FaTwitter />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaFacebookF />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaInstagram />
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-6 col-lg">
              <div className="footer mb-4">
                <h2>Services</h2>
                <ul className="footer-links list-unstyled w-100">
                  <li>
                    <a href="#">
                      <span>
                        <IoIosArrowRoundForward className="me-2" />
                      </span>
                      Amazing Deals
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>
                        <IoIosArrowRoundForward className="me-2" />
                      </span>
                      Quality Furniture
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>
                        <IoIosArrowRoundForward className="me-2" />
                      </span>
                      Modern Design
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>
                        <IoIosArrowRoundForward className="me-2" />
                      </span>
                      Best Support
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-6 col-lg">
              <div className="footer">
                <h2>Recent Posts</h2>
                <div className="footer-blog">
                  <a
                    href="#"
                    className="blog-img"
                    style={{ backgroundImage: 'url("/image-1.jpg")' }}
                  ></a>
                  <div className="text">
                    <div className="meta">
                      <div>
                        <a href="#">
                          <span>
                            <FaCalendarAlt size={11} className="me-1" />
                          </span>
                          Dec. 31, 2023
                        </a>
                      </div>
                      <div>
                        <a href="#">
                          <span>
                            <FaUserAlt size={9} className="me-1" />
                          </span>
                          Admin
                        </a>
                      </div>
                    </div>
                    <a href="#">Shop the Look Cottage Country Living Room</a>
                  </div>
                </div>

                <div className="footer-blog">
                  <a
                    href="#"
                    className="blog-img"
                    style={{ backgroundImage: 'url("/image-2.jpg")' }}
                  ></a>
                  <div className="text">
                    <div className="meta">
                      <div>
                        <a href="#">
                          <span>
                            <FaCalendarAlt size={11} className="me-1" />
                          </span>
                          Dec. 31, 2023
                        </a>
                      </div>
                      <div>
                        <a href="#">
                          <span>
                            <FaUserAlt size={9} className="me-1" />
                          </span>
                          Admin
                        </a>
                      </div>
                    </div>
                    <a href="#">Shop the Look Cottage Country Living Room</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg">
              <div className="footer mb-3">
                <h2>Have a Question?</h2>
                <div className="footer-address">
                  <ul className="mt-4">
                    <li>
                      <span className="icon">
                        <FaMap />
                      </span>
                      <span className="text">
                        203 Fake St. Mountain View, San Francisco, California,
                        USA
                      </span>
                    </li>
                    <li className="mb-4">
                      <span className="icon">
                        <FaPhoneAlt />
                      </span>
                      <span className="text">+2 392 3929 210</span>
                    </li>
                    <li>
                      <span className="icon">
                        <FaTelegramPlane />
                      </span>
                      <span className="text">info@yourdomain.com</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <Copyright />
    </>
  );
};
