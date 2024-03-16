/* eslint-disable react/prop-types */
import { FaCalendarAlt, FaComment, FaUser } from "react-icons/fa";
import "./Blog.scss";

export const Blog = ({ blogs, padding }) => {
  return (
    <section className={`blog-section ${padding}`}>
      <div className="container-xl">
        <div className="row justify-content-center mb-5">
          <div
            className="col-lg-7"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once={true}
          >
            <div className="title">
              <span>Our Blog</span>
              <h2>Recent Blogs</h2>
            </div>
          </div>
        </div>
        <div className="row g-4 justify-content-center">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="col-md-6 col-lg-6 d-flex"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-once={true}
              data-aos-delay="200"
            >
              <div
                className={`blog d-md-flex justify-content-end ${blog.rowReverse}`}
              >
                <a
                  href="#"
                  className="blog-image"
                  style={{
                    backgroundImage: `url(${blog.image})`,
                  }}
                ></a>
                <div className="blog-text">
                  <p className="meta">
                    <span>
                      <FaUser size={11} color="#D77500" className="me-1" />
                      Admin
                    </span>
                    <span>
                      <FaCalendarAlt
                        size={11}
                        color="#D77500"
                        className="me-1"
                      />
                      DEC 31, 2023
                    </span>
                    <span>
                      <a href="#">
                        <FaComment size={11} color="#D77500" className="me-1" />
                        3 COMMENTS
                      </a>
                    </span>
                  </p>
                  <h3 className="mb-3">
                    <a href="#">{blog.title}</a>
                  </h3>
                  <p>{blog.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
