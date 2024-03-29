import { useEffect, useState } from "react";
import { FaChevronUp } from "react-icons/fa";
import "./BackToTop.scss";

export const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = 200;

      const scrolled = window.scrollY > scrollY;

      setIsVisible(scrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button className={`back-to-top ${isVisible ? "visible" : ""}`} onClick={scrollToTop}>
      <FaChevronUp />
    </button>
  );
};
