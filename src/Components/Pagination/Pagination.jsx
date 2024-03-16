import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./Pagination.scss";

export const Pagination = () => {
  return (
    <section className="pagination-section">
      <div className="container-fluid">
        <div className="row">
          <div className="col text-center">
              <ul>
                <li>
                  <a href="#">
                    <FaChevronLeft size={10}/>
                  </a>
                </li>
                <li>
                  <span className="active">1</span>
                </li>
                <li>
                  <a href="#">2</a>
                </li>
                <li>
                  <a href="#">3</a>
                </li>
                <li>
                  <a href="#">4</a>
                </li>
                <li>
                  <a href="#">5</a>
                </li>
                <li>
                  <a href="#">
                    <FaChevronRight size={10}/>
                  </a>
                </li>
              </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
