/* eslint-disable react/no-unescaped-entities */
import {
  FaDribbble,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

import "./Form.scss";
export const Form = () => {
  return (
    <div className="container-xl">
      <div className="row no-gutters justify-content-center">
        <div className="col-lg-10">
          <div className="wrapper">
            <div className="row g-0">
              <div className="col-lg-12">
                <div className="contact-section p-md-5 p-4">
                  <div className="title mb-4">
                    <h3>Contact us</h3>
                    <p>We're open for any suggestion or just to have a chat</p>
                  </div>
                  <div className="row mb-4">
                    <div className="col-md-4">
                      <div className="contact-info">
                        <p>
                          <span className="d-block">Address:</span>
                          198 West 21th Street, Suite 721 New York NY 10016
                        </p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="contact-info">
                        <p>
                          <span className="d-block">Email:</span>
                          <a href="#">info@yoursite.com</a>
                        </p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="contact-info">
                        <p>
                          <span className="d-block">Phone:</span>
                          <a href="#">+ 1235 2355 98</a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <form>
                    <div className="row">
                      <div className="col-md-4">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Name"
                            required
                          />
                          <div className="invalid-feedback">
                            Please enter your name.
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Email"
                            required
                          />
                          <div className="invalid-feedback">
                            Please enter a valid email address.
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Subject"
                            required
                          />
                          <div className="invalid-feedback">
                            Please enter a subject.
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <textarea
                            cols="30"
                            rows="7"
                            className="form-control"
                            placeholder="Enter your message"
                            required
                          />
                          <div className="invalid-feedback">
                            Please enter your message.
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <input
                            type="submit"
                            value="Send Message"
                            className="send-btn"
                          />
                        </div>
                      </div>
                    </div>
                  </form>
                  <div className="social-media mt-5">
                    <h3>Follow us here</h3>
                    <p>
                      <a href="#">
                        <FaFacebookF />
                      </a>
                      <a href="#">
                        <FaTwitter />
                      </a>
                      <a href="#">
                        <FaInstagram />
                      </a>
                      <a href="#">
                        <FaDribbble />
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
