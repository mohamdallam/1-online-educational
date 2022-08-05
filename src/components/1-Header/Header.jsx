import React, { useRef } from "react";
import { Container } from "react-bootstrap";
import "./header.css";

const navLinks = [
  {
    display: "Home",
    url: "#",
  },
  {
    display: "About",
    url: "#",
  },

  {
    display: "Courses",
    url: "#",
  },
  {
    display: "Pages",
    url: "#",
  },
  {
    display: "Blog",
    url: "#",
  },
];

const Header = () => {
  const menuRef = useRef();
  const menuToggle = () => menuRef.current.classList.toggle("active__menu");

  return (
    <header className="header">
      <Container>
        <div className="navigation d-flex align-items-center justify-content-between">
          {/* LOGO */}
          <div className="logo">
            <h2 className="d-flex align-items-center">
              <i class="ri-pantone-line"></i> Learners
            </h2>
          </div>

          {/* Nav Center */}
          <div className="nav d-flex align-items-center gap-5">
            <div className="nav__menu" ref={menuRef} onClick={menuToggle}>
              <ul className="nav__list">
                {navLinks.map((item, index) => (
                  <li key={index} className="nav__item">
                    <a href={item.url}>{item.display}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Nav Right */}
          <div className="nav__right">
            <p className="mb-0 d-flex align-items-center gap-2 ">
              <i class="ri-phone-line"></i>
              +0123456789
            </p>
          </div>

          {/* Mobile Menu */}
          <div className="mobile__menu">
            <span>
              <i class="ri-menu-line" onClick={menuToggle}></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
