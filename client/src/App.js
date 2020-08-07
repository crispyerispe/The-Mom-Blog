import React from "react";
import Home from "./components/pages/Home";
import Navbar from "./components/layout/Navbar";
import Gallery from "./components/pages/Gallery";
import Contact from "./components/pages/Contact";
import Blog from "./components/pages/Blog";
import Kiddies from "./components/pages/Kiddies";
import Register from "./components/auth/Register";
import Footer from "./components/layout/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import art_1 from "./components/articles/art_1";
import art_2 from "./components/articles/art_2";
import art_3 from "./components/articles/art_3";
import art_4 from "./components/articles/art_4";
import fwtf_1 from "./components/articles/fwtf_1";
import fwtf_2 from "./components/articles/fwtf_2";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="app-container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/blog" component={Blog} />
            <Route exact path="/kiddies" component={Kiddies} />
            <Route exact path="/gallery" component={Gallery} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/art_1" component={art_1} />
            <Route exact path="/art_2" component={art_2} />
            <Route exact path="/art_3" component={art_3} />
            <Route exact path="/art_4" component={art_4} />
            <Route exact path="/fwtf_1" component={fwtf_1} />
            <Route exact path="/fwtf_2" component={fwtf_2} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
