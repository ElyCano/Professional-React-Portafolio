import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

// DO NOT USE THE IMAGES IN PRODUCTION

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Progressive Web Applications Budget Tracker ",
    github: "https://github.com/ElyCano/budget-tracker-ec",
    demo: "https://budget-tracker-ec.herokuapp.com/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Wedding Rental Decor Lost Sales Trackable Application",
    github: "https://github.com/ElyCano/partydreams-lost-sales-entries",
    demo: "https://partydreams-lost-sales-entries.herokuapp.com/",
  },
  {
    id: 3,
    image: IMG3,
    title: "Social Media Application",
    github: "http://elycano.digital/",
    demo: "https://watch.screencastify.com/v/KafZhVRtMMo9CdfTG7pd",
  },
  {
    id: 4,
    image: IMG4,
    title: "Employee Tracker",
    github: "https://github.com/ElyCano/Employee_Tracker",
    demo: "https://watch.screencastify.com/v/O3sV2WaRIQWW0LbcHXpB",
  },
  {
    id: 5,
    image: IMG5,
    title: "Tech Blog",
    github: "https://github.com/ElyCano/Tech-Blog",
    demo: "https://tech-blog-app-ec.herokuapp.com/",
  },
  {
    id: 6,
    image: IMG6,
    title: "Note Taker",
    github: "https://github.com/ElyCano/Note_Taker",
    demo: "https://notetakerapp-ec.herokuapp.com/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
