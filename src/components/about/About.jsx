import React from "react";
import "./about.css";
import ME from "../../assets/me-about1.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>2+ Years Working</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5> Entrepenur </h5>
              <small>Bussiness Owner</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>30 Completed</small>
            </article>
          </div>

          <p>
            My name is Elizabeth Cano, I’m an entrepreneur, a full time Business
            Analyst employee and a very active member of my community which it’s
            something that I really enjoy. I always knew I wanted to be an
            entrepreneur so I went to business management school and minored in
            financial mathematics.
            <br></br>I have spent many years in operations, logistics,
            managerial positions and sales. I think the fact that I started
            working since I was 6yo has given me a very extensive background and
            unique set of skills. I’ve been privileged with self drive and
            determination which have allowed me to accomplish many goals but my
            biggest accomplishments are being a mother and wife. Family has
            allowed me to discover that guide and helping others is my
            specialty. I drink way too much coffee but I guess… sleep is for the
            weak!
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
