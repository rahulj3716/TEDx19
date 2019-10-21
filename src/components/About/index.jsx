import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import Glimpses from "./Glimpses"
import Footer from "../Landingpage/Footer";
import "./css/index.css";

export default class AboutIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="about-page">
        {/* <nav
          id="about-page-navbar"
          style={{
            backgroundImage:
              "linear-gradient(to right, #1e1e26, #291e24 57%, #341f21)"
          }}
        > */}
          {/* <div className="about-page-heading">
            <p>
              <span className="ted">
                TED<sup>x</sup>
              </span>

              <span className="iitr"> &nbsp;IITRoorkee</span>
            </p>
          </div> */}
          <Navbar />
        {/* </nav> */}
        <section className="about-section1">
          <div className="about-section1-background"></div>
          <div className="about-section1-content">
            <div className="about-section1-content-image"></div>
            <div className="about-section1-content-text">
              <h1>
                What is <span>TED</span>?
              </h1>
              <p>
                TED is a nonprofit organization devoted to Ideas Worth
                Spreading. Started as a four-day conference in California 30
                years ago, TED has grown to support its mission with multiple
                initiatives. The two annual TED Conferences invite the world's
                leading thinkers and doers to speak for 18 minutes or less. Many
                of these talks are then made available, free, at TED.com. TED
                speakers have included Bill Gates, Jane Goodall, Elizabeth
                Gilbert, Sir Richard Branson, Nandan Nilekani, Philippe Starck,
                Ngozi Okonjo-Iweala, Sal Khan and Daniel Kahneman.
              </p>
            </div>
          </div>
        </section>
        <section className="about-section2">
          <div className="about-section2-background"></div>
          <div className="about-section1-content">
            <div className="about-section1-content-text">
              <h1>
                What is <span>TEDx</span>?
              </h1>
              <p style={{ alignSelf: "flex-start" }}>
                TED is a nonprofit organization devoted to Ideas Worth
                Spreading. Started as a four-day conference in California 30
                years ago, TED has grown to support its mission with multiple
                initiatives. The two annual TED Conferences invite the world's
                leading thinkers and doers to speak for 18 minutes or less. Many
                of these talks are then made available, free, at TED.com. TED
                speakers have included Bill Gates, Jane Goodall, Elizabeth
                Gilbert, Sir Richard Branson, Nandan Nilekani, Philippe Starck,
                Ngozi Okonjo-Iweala, Sal Khan and Daniel Kahneman.
              </p>
            </div>
            <div className="about-section1-content-image"></div>
          </div>
        </section>
        <section className="about-section3">
          <div className="about-section1-background"></div>
          <div className="about-section1-content">
            <div className="about-section1-content-image"></div>
            <div className="about-section1-content-text">
              <h1>
                What is <span>TED</span>?
              </h1>
              <p>
                TED is a nonprofit organization devoted to Ideas Worth
                Spreading. Started as a four-day conference in California 30
                years ago, TED has grown to support its mission with multiple
                initiatives. The two annual TED Conferences invite the world's
                leading thinkers and doers to speak for 18 minutes or less. Many
                of these talks are then made available, free, at TED.com. TED
                speakers have included Bill Gates, Jane Goodall, Elizabeth
                Gilbert, Sir Richard Branson, Nandan Nilekani, Philippe Starck,
                Ngozi Okonjo-Iweala, Sal Khan and Daniel Kahneman.
              </p>
            </div>
          </div>
        </section>
        <Glimpses />
        <Footer />
      </div>
    );
  }
}
