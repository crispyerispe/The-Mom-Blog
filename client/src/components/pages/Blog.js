import React, { Fragment } from "react";
import P25 from "../../images/pc_25.jpg";
import A6 from "../../images/art_6.jpg";
import A5 from "../../images/art_5.jpeg";
import ML from "../../images/mom_life.jpg";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <Fragment>
      {/* Article Cards */}
      <div className="art-container">
        <div className="art-cards">
          {/* First Article */}
          <div className="article" style={{ height: "649px" }}>
            <div id="1" style={{ display: "block" }}>
              <div className="article-image">
                <Link to="/art_3">
                  <img width="940" height="987" src={P25} alt="..." />
                </Link>
              </div>
              <div className="head-section">
                <header className="article-header">
                  <div className="category">
                    <Link href="#" rel="tag">
                      Personal
                    </Link>
                  </div>
                  <h2 className="article-title">
                    <Link to="/art_3">
                      Being A Teen Mom
                    </Link>
                  </h2>
                </header>
                <div className="art-content clear">
                  <div className="intro">
                    Being a mother isn't an easy job but being a teen mom has a
                    whole other set of challenges. Challenges ranging from
                    people's judgements to altering your perception of how you
                    thought your life was going to go...
                  </div>
                </div>
                <div className="cen clearfix">
                  <span className="date">July 19, 2020</span>
                </div>
              </div>
            </div>
          </div>

          {/* Second Article */}
          <div className="article" style={{ height: "649px" }}>
            <div id="02" style={{ display: "block" }}>
              <div className="article-image">
                <Link to="/art_1">
                  <img src={A6}  width="940" height="987" alt="" />
                </Link>
              </div>
              <div className="head-section">
                <header className="article-header">
                  <div className="category">
                    <Link href="#" rel="tag">
                      Mom Life
                    </Link>
                  </div>
                  <h2 className="article-title">
                    <Link to="/art_1">
                      The First Year Of Being A Mom
                    </Link>
                  </h2>
                </header>
                <div className="art-content clear">
                  <div className="intro">
                    The first year of being mom is definitely the toughest - not
                    to say the rest is a walk in the park but it takes major
                    adjusting...
                  </div>
                </div>
                <div className="cen clearfix">
                  <span className="date">July 20, 2020</span>
                </div>
              </div>
            </div>
          </div>

          {/* Third Article */}
          <div className="article" style={{ height: "649px" }}>
            <div id="1" style={{ display: "block" }}>
              <div className="article-image">
                <Link to="/art_2">
                  <img width="940" height="987" src={A5} alt="..." />
                </Link>
              </div>
              <div className="head-section">
                <header className="article-header">
                  <div className="category">
                    <Link href="#" rel="tag">
                      Personal
                    </Link>
                  </div>
                  <h2 className="article-title">
                    <Link to="/art_2">
                      My Pregnancy & Birth Story
                    </Link>
                  </h2>
                </header>
                <div className="art-content clear">
                  <div className="intro">
                    I fell pregnant at the age of 16 and gave birth at 17.
                    Certainly not the direction I saw my life heading as I
                    always said I'd love to be a young mother but I didn't mean
                    that young...
                  </div>
                </div>
                <div className="cen clearfix">
                  <span className="date">July 21, 2020</span>
                </div>
              </div>
            </div>
          </div>

          {/* Fourth Article */}
          <div className="article" style={{ height: "649px" }}>
            <div id="1" style={{ display: "block" }}>
              <div className="article-image">
                <Link to="/art_4">
                  <img width="940" height="987" src={ML} alt="..." />
                </Link>
              </div>
              <div className="head-section">
                <header className="article-header">
                  <div className="category">
                    <Link href="#" rel="tag">
                      Mom Life
                    </Link>
                  </div>
                  <h2 className="article-title">
                    <Link to="/art_4">
                      Working From Home During Covid-19
                    </Link>
                  </h2>
                </header>
                <div className="art-content clear">
                  <div className="intro">
                    Let's talk about something that has taken the world by
                    storm... Of course I'm talking about Corona. It's impacted
                    everyone in its own way.
                  </div>
                </div>
                <div className="cen clearfix">
                  <span className="date">July 22, 2020</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="clear"></div>
      {/* Article Cards */}
      {/* Page Content */}
    </Fragment>
  );
};

export default Blog;
