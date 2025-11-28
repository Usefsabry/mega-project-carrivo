import React from "react";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";
import hero from "../../assets/images/hero.png";
import user1 from "../../assets/images/user1.jpg";
import user2 from "../../assets/images/user2.jpg";
import user3 from "../../assets/images/user3.jpg";
import { FaClipboardList, FaChartLine, FaUsers } from "react-icons/fa";
import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      <Navbar />
      
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-text">
          <h1>Find Your Path,<br />Shape Your Future</h1>
          <p>
            Carrivo helps you discover the career that fits you and connect with
            mentors who guide your whole journey.
          </p>
          <div className="hero-buttons">
            <button className="btn find">Find Your Path</button>
            <button className="btn know">Know More</button>
          </div>
        </div>
        <div className="hero-img">
          <img src={hero} alt="hero" />
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works">
        <h2>How It Works!</h2>
        <p className="how-desc">
          A simple, three-step journey to unlock your professional potential
        </p>
        <div className="how-steps">
          <div className="step">
            <FaClipboardList className="step-icon"/>
            <h3>1. Take the Assessment</h3>
            <p>
              Our quick personality test identifies your strengths,<br/>
              then suggests career paths tailored to you
            </p>
          </div>
          <div className="step">
            <FaChartLine className="step-icon"/>
            <h3>2. Explore Career Paths</h3>
            <p>
              Dive into organized learning paths with expert-led content <br/>
              and customized roadmap to build in-demand skills
            </p>
          </div>
          <div className="step">
            <FaUsers className="step-icon"/>
            <h3>3. Connect With Mentors</h3>
            <p>
              Get personalized guidance and support from industry professional mentors to accelerate your growth
            </p>
          </div>
        </div>
      </section>


    {/* Testimonials Section */} 
<section className="testimonials-section">
  <h2>Words From Our Students</h2>
  <p className="testimonials-desc">
    See how Carrivo helped students explore, learn, and grow
  </p>
  <div className="testimonials-cards">
    {/* Card 1 */}
    <div className="testimonial-card">
      <p className="testimonial-quote">
        "Carrivo connected me with a mentor who actually understood what I wanted to do. My first UX/UI project was easy and rewarding!"
      </p>
      <div className="testimonial-info">
        <img className="testimonial-img" src={user3} alt="Wael Selim" />
        <div className="testimonial-person">
          <p className="testimonial-name"><strong>Wael Selim</strong></p>
          <p className="testimonial-role">UX/UI Designer</p>
        </div>
      </div>
    </div>
    {/* Card 2 */}
    <div className="testimonial-card">
      <p className="testimonial-quote">
        "I never knew how to start my career in marketing until Carrivo showed me the path and guided me through my journey."
      </p>
      <div className="testimonial-info">
        <img className="testimonial-img" src={user2} alt="Mai Galal" />
        <div className="testimonial-person">
          <p className="testimonial-name"><strong>Mai Galal</strong></p>
          <p className="testimonial-role">Marketing Strategist</p>
        </div>
      </div>
    </div>
    {/* Card 3 */}
    <div className="testimonial-card">
      <p className="testimonial-quote">
        "Thanks to Carrivo, I got advice from a real developer who helped me avoid mistakes I would have made on my own."
      </p>
      <div className="testimonial-info">
        <img className="testimonial-img" src={user3} alt="Khaled Faris" />
        <div className="testimonial-person">
          <p className="testimonial-name"><strong>Khaled Faris</strong></p>
          <p className="testimonial-role">Software Developer</p>
        </div>
      </div>
    </div>
  </div>
</section>

{ /* Call to Action Section */ }
<section className="cta-section">
  <h2 className="cta-title">Ready to Find Your Path?</h2>
  <p className="cta-desc">
    Join thousands of students now and learn, grow, and connect<br />
    with mentors who guide you
  </p>
  <button className="cta-btn">Get Started For Free</button>
</section>
<Footer />
    </div>
  );
}

