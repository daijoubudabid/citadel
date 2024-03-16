import { useEffect, useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Header.scss";

export const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [logo, setLogo] = useState(window.innerWidth <= 992);

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };

  useEffect(() => {
    const handleResize = () => {
      setLogo(window.innerWidth <= 992);
    };

    const handleScroll = () => {
      const scrolled = window.scrollY > 0;
      setIsScrolled(scrolled);
    };

    setIsScrolled(window.scrollY > 0);

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Navbar expand="lg" className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="container-xl">
        <Navbar.Brand href="/">
          {logo ? (
            <img width={150} src="/logo-white.png" alt="Mobile Logo" />
          ) : (
            <img width={150} src="/logo-black.png" alt="Desktop Logo" />
          )}
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={handleOpenMenu}
        >
          <div className={`hamburger ${openMenu ? "close" : ""}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto mt-4 mt-lg-0">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/collection">Collection</Nav.Link>
            <Nav.Link href="/blog">Blog</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};
