import React, { Fragment } from "react";
import Logo from "../../images/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Fragment>
      <div className="headertop-wrap">
        <nav className="fixed-nav" id="menuNav">
          <div className="header websitelogo section" id="Website Logo">
            <div className="widget Header" data-version="1" id="Header1">
              <div id="head-inner">
                <a href="#menuNav" style={{ display: "block" }}>
                  <img
                    alt="MB Logo"
                    height="120px; "
                    id="Header1_headerimg"
                    src={Logo}
                    style={{ display: "block" }}
                    width="250px; "

                  />
                </a>
              </div>
            </div>
          </div>
          <div className="header mobilelogo section" id="Mobile Logo">
            <div className="widget Header" data-version="1" id="Header2">
              <div id="head-inner">
                <a href="#menuNav" style={{ display: "block" }}>
                  <img
                    alt="MB Logo"
                    height="120px; "
                    id="Header2_headerimg"
                    src={Logo}
                    style={{ display: "block" }}
                    width="250px; "
                    alt="..."
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="topBar">
            <div className="rapper">
              <div className="topLeft section" id="Menubar">
                <div className="widget" data-version="1" id="HTML665">
                  <nav className="nav-collapse" id="navTop">
                    <ul className="topmenu1" id="masthead">
                      <li>
                        <Link to="/">Home</Link>
                      </li>
                      <li>
                        <Link to="/blog">Blog</Link>
                      </li>
                      <li>
                        <Link to="/kiddies">Kiddies</Link>
                      </li>
                      <li>
                        <Link to="/gallery">Gallery</Link>
                      </li>
                      <li>
                        <Link to="/contact">Contact Us</Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
          <div className="socialtop">
            <div className="social-container section" id="Social-Icons">
              <div className="widget" data-version="1" id="HTML535">
                <ul className="social text-center">
                  <li className="updown-wrap">
                    <a
                      className="updown-inner collections-icon-twitter "
                      href="#"
                      target="_blank"
                    >
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li className="updown-wrap">
                    <a
                      className="updown-inner collections-icon-facebook "
                      href="#"
                      target="_blank"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li className="updown-wrap">
                    <a
                      className="updown-inner collections-icon-pinterest "
                      href="#"
                      target="_blank"
                    >
                      <i className="fab fa-pinterest"></i>
                    </a>
                  </li>
                  <li className="updown-wrap">
                    <a
                      className="updown-inner collections-icon-instagram "
                      href="#"
                      target="_blank"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <Link to="/register">Sign Up</Link>
          </div>
        </nav>
      </div>
      <div className="headertop-wrap-mobile">
        <nav id="menuNav">
          <div className="topBar">
            <div className="rapper">
              <div className="topLeft">
                <div className="slicknav_menu">
                  <a
                    href="menuNav"
                    aria-haspopup="true"
                    role="button"
                    tabindex="0"
                    className="slicknav_btn slicknav_collapsed"
                    style={{ outline: "none" }}
                  >
                    <span className="slicknav_menutxt">Menu</span>
                    <span className="slicknav_icon">
                      <span className="slicknav_icon-bar"></span>
                      <span className="slicknav_icon-bar"></span>
                      <span className="slicknav_icon-bar"></span>
                    </span>
                  </a>
                  <ul
                    className="slicknav_nav slicknav_hidden"
                    style={{ display: "none" }}
                    aria-hidden="true"
                    role="menu"
                  >
                    <li>
                      <Link to="/" role="menuitem" tabindex="-1">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link to="/blog" role="menuitem" tabindex="-1">
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link to="/kiddies" role="menuitem" tabindex="-1">
                        Kiddies
                      </Link>
                    </li>
                    <li>
                      <Link to="/gallery" role="menuitem" tabindex="-1">
                        Gallery
                      </Link>
                    </li>
                    <li>
                      <Link to="/contact" role="menuitem" tabindex="-1">
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="header">
            <div className="socialtop">
              <Link to="/register">Sign Up</Link>
            </div>
          </div>
        </nav>
      </div>
    </Fragment>
  );
};

export default Navbar;
