import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import TM from "../../images/tm.jpg";
import f1 from "../../images/f1.jpg";
import f2 from "../../images/f2.jpg";
import TK from "../../images/tk.jpg";

const Kiddies = () => {
  return (
    <Fragment>
      <div className="art-container">
        <div className="art-cards">
          {/* First Article */}
          <div className="article" style={{ height: "649px" }}>
            <div id="1" style={{ display: "block" }}>
              <div className="article-image">
                <Link to="/fwtf_1">
                  <img width="940" height="987" src={f1} alt="..." />
                </Link>
              </div>
              <div className="head-section">
                <header className="article-header">
                  <div className="category">
                    <Link to="/kiddies" rel="tag">
                      Kiddies
                    </Link>
                  </div>
                  <h2 className="article-title">
                    <Link to="/fwtf_1">Fun With The Fam | Outings</Link>
                  </h2>
                </header>
                <div className="art-content clear">
                  <div className="intro">
                    When going out we always want to make sure our little ones
                    will be entertained so I have complied a list a kid friendly
                    places that you could try out...
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
                <Link to="/fwtf_2">
                  <img src={f2}  width="940" height="987" alt="..." />
                </Link>
              </div>
              <div className="head-section">
                <header className="article-header">
                  <div className="category">
                    <Link to="/kiddies" rel="tag">
                      Kiddies
                    </Link>
                  </div>
                  <h2 className="article-title">
                    <Link to="/fwtf_2">Fun With The Fam | Restaurants</Link>
                  </h2>
                </header>
                <div className="art-content clear">
                  <div className="intro">
                    Now that you've worked up an appetite, here are some kid
                    friendly restaurants to enjoy...
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
                <a href="https://www.awesomeinventions.com/parent-child-tips-and-tricks">
                  <img width="940" height="987" src={TK} alt="..." />
                </a>
              </div>
              <div className="head-section">
                <header className="article-header">
                  <div className="category">
                    <Link to="/kiddies" rel="tag">
                      Kiddies
                    </Link>
                  </div>
                  <h2 className="article-title">
                    <a href="https://www.awesomeinventions.com/parent-child-tips-and-tricks/">
                      Amazing Tips & Tricks For Kids
                    </a>
                  </h2>
                </header>
                <div className="art-content clear">
                  <div className="intro">
                    As any parent will tell you, taking care of their bundles of
                    joy is one of the most exhausting things a person can do.
                    Thankfully we have found 17 of the most awesome child care
                    hacks just to make your day that little bit easier...
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
                <a href="https://www.parents.com/parenting/better-parenting/advice/tips-from-moms/l">
                  <img width="940" height="987" src={TM} alt="..." />
                </a>
              </div>
              <div className="head-section">
                <header className="article-header">
                  <div className="category">
                    <Link to="/kiddies" rel="tag">
                      Kiddies
                    </Link>
                  </div>
                  <h2 className="article-title">
                    <a href="https://www.parents.com/parenting/better-parenting/advice/tips-from-moms/">
                      Tips & Tricks For Moms
                    </a>
                  </h2>
                </header>
                <div className="art-content clear">
                  <div className="intro">
                    Moms we know you don't always take time for yourselves so
                    this article is perfect for you...
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
    </Fragment>
  );
};

export default Kiddies;
