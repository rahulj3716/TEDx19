import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import "./src/css/landingpage.css";
import About from "./About";
import Theme from "./Theme";

import Speaker from "./Speaker";
import Footer from "./Footer";

export default class AboutusIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div
        style={{
          backgroundImage:
            "linear-gradient(to right, #1e1e26, #291e24 57%, #341f21)"
        }}
      >
        <section id="landing-page-navbar">
          <Navbar />
        </section>
        <section>
          <div>
            <About />
          </div>
        </section>
        <section>
          <div>
            <Theme />
          </div>
        </section>
        <section>
          <div>
            <Speaker />
          </div>
        </section>
        <section>
          <div>
            <Footer />
          </div>
        </section>
      </div>
    );
  }
}
