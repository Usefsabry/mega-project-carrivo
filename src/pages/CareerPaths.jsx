import React, { useState } from "react";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import "../styles/CareerPaths.css";

// Import all career path icons
import backendIcon from "../assets/images/backend.png";
import frontendIcon from "../assets/images/frontend.png";
import dataAnalystIcon from "../assets/images/Data-Analyst.png";
import fullStackIcon from "../assets/images/Full-stack.png";
import aiEngineerIcon from "../assets/images/AI-Engineer.png";
import aiDataScientistIcon from "../assets/images/AI-and-Data-Scientist.png";
import blockchainIcon from "../assets/images/Blockchain.png";
import cyberSecurityIcon from "../assets/images/Cyber-Security.png";
import devOpsIcon from "../assets/images/DevOps.png";
import gameDeveloperIcon from "../assets/images/Game-Developer.png";
import androidIcon from "../assets/images/Android.png";
import iosIcon from "../assets/images/IOS.png";
import productManagerIcon from "../assets/images/Product-Manager.png";
import engineeringManagerIcon from "../assets/images/Engineering-Manager.png";
import developerRelationsIcon from "../assets/images/Developer-Relations.png";
import technicalWriterIcon from "../assets/images/Technical-Writer.png";
import softwareArchitectIcon from "../assets/images/Software-Architect.png";
import biAnalystIcon from "../assets/images/BI-Analyst.png";
import dataEngineerIcon from "../assets/images/data-engineer.png";
import machineLearningIcon from "../assets/images/machine.png";
import mlOpsIcon from "../assets/images/MLOps.png";
import qaIcon from "../assets/images/QA.png";
import serverGameDevIcon from "../assets/images/Server-Side-Game-Developer.png";
import uiuxIcon from "../assets/images/uiux-icon.jpg";

const STATIC_PATHS = [
  {
    id: 1,
    title: "Backend",
    icon: backendIcon,
    desc: "Backend Development focuses on building the core systems behind applications, ensuring strong functionality, secure data handling, and efficient performance."
  },
  {
    id: 2,
    title: "Frontend",
    icon: frontendIcon,
    desc: "Frontend Development focuses on creating interactive, user-friendly interfaces that bring designs to life and ensure smooth, responsive experiences."
  },
  {
    id: 3,
    title: "Data Analyst",
    icon: dataAnalystIcon,
    desc: "Data Analysis focuses on interpreting data to uncover insights, helping teams understand trends, optimize decisions, and improve overall performance."
  },
  {
    id: 4,
    title: "Full Stack",
    icon: fullStackIcon,
    desc: "Full Stack Development combines front-end and back-end expertise to build complete, user-ready applications that are functional, scalable, and visually cohesive."
  },
  {
    id: 5,
    title: "AI Engineer",
    icon: aiEngineerIcon,
    desc: "AI Engineering focuses on designing and building intelligent systems that learn, adapt, and solve complex problems through advanced algorithms and data-driven methods."
  },
  {
    id: 6,
    title: "AI and Data Scientist",
    icon: aiDataScientistIcon,
    desc: "AI and Data Science centers on analyzing complex data, building predictive models, and creating intelligent solutions that drive meaningful business outcomes."
  },
  {
    id: 7,
    title: "Blockchain",
    icon: blockchainIcon,
    desc: "Blockchain Development focuses on building decentralized applications and smart contracts using distributed ledger technology."
  },
  {
    id: 8,
    title: "Cyber Security",
    icon: cyberSecurityIcon,
    desc: "Cybersecurity focuses on protecting systems, networks, and data from digital threats and attacks."
  },
  {
    id: 9,
    title: "DevOps",
    icon: devOpsIcon,
    desc: "DevOps combines development and operations to streamline software delivery and infrastructure management."
  },
  {
    id: 10,
    title: "Game Developer",
    icon: gameDeveloperIcon,
    desc: "Game Development focuses on creating engaging interactive experiences and video games across various platforms."
  },
  {
    id: 11,
    title: "Android",
    icon: androidIcon,
    desc: "Android Development focuses on building mobile applications for the Android platform using Java, Kotlin, and modern frameworks."
  },
  {
    id: 12,
    title: "iOS",
    icon: iosIcon,
    desc: "iOS Development focuses on creating mobile applications for Apple devices using Swift and iOS frameworks."
  },
  {
    id: 13,
    title: "Product Manager",
    icon: productManagerIcon,
    desc: "Product Management focuses on guiding product strategy, development, and launch to meet user needs and business goals."
  },
  {
    id: 14,
    title: "Engineering Manager",
    icon: engineeringManagerIcon,
    desc: "Engineering Management focuses on leading technical teams, managing projects, and aligning engineering efforts with business objectives."
  },
  {
    id: 15,
    title: "Developer Relations",
    icon: developerRelationsIcon,
    desc: "Developer Relations focuses on building relationships with developers, creating technical content, and fostering developer communities."
  },
  {
    id: 16,
    title: "Technical Writer",
    icon: technicalWriterIcon,
    desc: "Technical Writing focuses on creating clear, comprehensive documentation and guides for technical products and services."
  },
  {
    id: 17,
    title: "Software Architect",
    icon: softwareArchitectIcon,
    desc: "Software Architecture focuses on designing scalable, maintainable system structures and technical roadmaps."
  },
  {
    id: 18,
    title: "BI Analyst",
    icon: biAnalystIcon,
    desc: "Business Intelligence focuses on analyzing business data to provide insights and support strategic decision-making."
  },
  {
    id: 19,
    title: "Data Engineer",
    icon: dataEngineerIcon,
    desc: "Data Engineering focuses on building and maintaining data pipelines, infrastructure, and systems for data processing."
  },
  {
    id: 20,
    title: "Machine Learning",
    icon: machineLearningIcon,
    desc: "Machine Learning focuses on developing algorithms and models that enable systems to learn and improve from data."
  },
  {
    id: 21,
    title: "MLOps",
    icon: mlOpsIcon,
    desc: "MLOps focuses on deploying, monitoring, and maintaining machine learning models in production environments."
  },
  {
    id: 22,
    title: "QA",
    icon: qaIcon,
    desc: "Quality Assurance focuses on testing software to ensure it meets quality standards and functions correctly."
  },
  {
    id: 23,
    title: "Server-Side Game Developer",
    icon: serverGameDevIcon,
    desc: "Server-Side Game Development focuses on building backend infrastructure and multiplayer systems for games."
  },
  {
    id: 24,
    title: "UI/UX Designer",
    icon: uiuxIcon,
    desc: "UI/UX Design focuses on creating intuitive, user-centered digital experiences that are both functional and visually engaging."
  },
];

export default function CareerPaths() {
  const [paths] = useState(STATIC_PATHS);

  return (
    <div className="paths-page">
      <Navbar />

      <main className="paths-wrapper">
        <section className="paths-header">
          <h1>Career Paths</h1>
          <p>
            Explore the full list of all career paths available on our platform, each one comes with a ready roadmap and learning resources you'll access once you complete the test.
          </p>
        </section>

        <section className="paths-grid">
          {paths.map((path) => (
            <article key={path.id} className="path-card">
              <div className="path-icon-wrapper">
                <img src={path.icon} alt={path.title} className="path-icon" />
              </div>
              <h3 className="path-title">{path.title}</h3>
              <p className="path-desc">{path.desc}</p>
            </article>
          ))}
        </section>
      </main>

      <Footer />
    </div>
  );
}