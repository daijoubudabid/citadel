import { FaHeart } from "react-icons/fa";

const style = {
  backgroundColor: "#ABD6EB",
  textAlign: "center",
  padding: "50px",
  marginTop: 0,
};

const text = {
  marginBottom: 0,
  fontSize: "14px",
  color: "gray",
};

const colorText = {
  color: "#3099cd",
  fontWeight: 500,
  cursor: "pointer",
  textDecoration: "none",
};

export const Copyright = () => {
  return (
    <div style={style}>
      <p style={text}>
        Copyright ©2023 All rights reserved | This website is made with{" "}
        <span>
          <FaHeart />
        </span>{" "}
        by <a rel="noopener noreferrer" href="https://dabids-portfolio.netlify.app/" target="_blank" style={colorText}>Dabid Marma</a>
      </p>
    </div>
  );
};
