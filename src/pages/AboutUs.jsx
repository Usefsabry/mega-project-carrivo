import React from "react";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

import missionImg from "../assets/images/our-misson.jpg";
import problemImg from "../assets/images/our-problem.jpg";
import solutionImg from "../assets/images/out-solution.jpg";

import "../styles/AboutUs.css";

export default function AboutUs() {
  return (
    <div className="about-page">
      <Navbar />

      <main className="about-wrapper">
        {/* Header */}
        <section className="about-intro">
          <h1>About Us</h1>
          <p>
            We help students discover the right career path and guide them
            step-by-step with learning resources and expert mentorship.
          </p>
        </section>

        {/* Row 1 - Our Mission */}
        <section className="about-row">
          <div className="about-text">
            <h2>Our Mission</h2>
            <p>
              Our mission is to empower every student to discover the career
              that fits them, explore careers confidently, and receive real
              guidance from trusted mentors.
            </p>
          </div>
          <div className="about-image">
            <img src={missionImg} alt="Our mission" />
          </div>
        </section>

        {/* Row 2 - Problem We Solve */}
        <section className="about-row reverse">
          <div className="about-text">
            <h2>The Problem We Solve</h2>
            <p>
              People often choose tracks that don't fit their strengths or
              personality. We fix that by matching each learner with a suitable
              track, giving them a tailored roadmap and resources, and pairing
              them with a mentor who walks the journey with them.
            </p>
          </div>
          <div className="about-image">
            <img src={problemImg} alt="Problem we solve" />
          </div>
        </section>

        {/* Row 3 - Our Solution */}
        <section className="about-row">
          <div className="about-text">
            <h2>Our Solution</h2>
            <p>
              Carrivo provides a clear and personalized journey, from a quick
              personality test to smart career recommendations, step-by-step
              roadmaps, and verified learning resources. And most importantly,
              students get matched with real mentors who guide them and keep
              them on the right track.
            </p>
          </div>
          <div className="about-image">
            <img src={solutionImg} alt="Our solution" />
          </div>
        </section>

        {/* CTA Section */}
        <section className="about-cta">
          <h2>Ready to Find Your Path?</h2>
          <p>
            Join thousands of students now and learn, grow, and connect
            with mentors who guide you.
          </p>
          <button className="about-cta-btn">Get Started For Free</button>
        </section>
      </main>

      <Footer />
    </div>
  );
}