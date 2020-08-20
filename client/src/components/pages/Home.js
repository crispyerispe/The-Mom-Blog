import React, { Fragment } from "react";
import P1 from "../../images/pc_1.jpg";
import P2 from "../../images/pc_2.jpeg";
import P3 from "../../images/pc_3.jpg";

const Home = () => {
  return (
    <Fragment>
      <header>
        <div id="MB_slider" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner" role="listbox">
            <div
              className="carousel-item active"
              style={{ backgroundImage: `url(${P1})` }}
            ></div>
            <div
              className="carousel-item"
              style={{ backgroundImage: `url(${P2})` }}
            ></div>
            <div
              className="carousel-item"
              style={{ backgroundImage: `url(${P3})` }}
            ></div>
          </div>
          <a
            className="carousel-control-prev"
            href="#MB_slider"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#MB_slider"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </header>
      {/* Slider End */}
      {/* Welcome */}
      <section className="welcome-sec text-center py-5" id="about">
        <div className="bg-text">
            <h2>
              <strong>- Welcome To Moms Blog -</strong>
            </h2>
            <p>A place created for moms by a mom</p>
            <h2>
              <strong>About Us</strong>
            </h2>
            <p>
            This is a blog created for mothers but not limited to them. At Mom's
            Blog our aim is provide a space where Moms can come to for adivce,
            to vent, to relax and lastly but most importantly CONNECT. This blog
            is near and dear to my heart as there's nothing like being a mother
            to some little human. I wanted a platform to share my experiences
            and document my journey as I go along. I also want other mothers to
            have to have the same platform so I created this blog.
            </p>
        </div>
      </section>

      {/* Welcome */}
    </Fragment>
  );
};

export default Home;
