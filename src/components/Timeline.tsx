import React, { useState, useEffect } from "react";
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import '../assets/styles/Timeline.scss';
import GERA from '../assets/images/GERA.png'; 
import GTM from '../assets/images/GTM.png'; 

const projectData = [
  {
    img: GERA,
    date: "Janvier 2024 - Mai 2024",
    title: "Développeur Full-stack",
    subtitle: "Ministère de l'Enseignement Supérieur et de la Recherche Scientifique (MESUPRES)",
    description: "Conception et Réalisation d'une application web pour la gestion des événements avec rédaction des articles.",
    stack: "Stacks : Django, Vue.js, HTML, CSS, Javascript, PostgreSQL",
    link: "https://yujisatojr.itch.io/spacecraft"
  },
  {
    img: GTM, // Replace with another image for a real project
    date: "Juin 2024 - Octobre 2024",
    title: "Développeur Full-stack",
    subtitle: "Projet Personnel",
    description: "Développement d'une application web permettant les échanges entre cryptomonnaies et services mobiles money avec intégration de taux de change en temp réel et gestion de transaction.",
    stack: "Stacks : Django, React.Js, SCSS, PostgreSQL",
    link: "https://example.com/project2"
  },
  {
    img: GERA, // Replace with another image for a real project
    date: "Mars 2023 - Mai 2023",
    title: "Ingénieur en Machine Learning",
    subtitle: "DataLab Solutions",
    description: "Création d'un modèle de classification pour la détection de fraude financière.",
    stack: "Stacks : Python, TensorFlow, Pandas, Scikit-Learn",
    link: "https://example.com/project3"
  }
];

function Timeline() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const autoSlide = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % projectData.length);
    }, 5000); // Adjust timing as needed

    return () => clearInterval(autoSlide);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? projectData.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projectData.length);
  };

  return (
    <div id="history">
      <div className="projects-container" id="projects">

        <h1>Expériences et Projets</h1>
        <div className="carousel-button ">

        <button className="carousel-button left" onClick={handlePrev}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button className="carousel-button right" onClick={handleNext}>
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
          </div>
        <div className="carousel">

          <div className="carousel-slide">
            <div className="carousel-content">
              <div className="carousel-image">
                <a href={projectData[currentIndex].link} target="_blank" rel="noreferrer">
                  <img src={projectData[currentIndex].img} className="projectimg" alt="thumbnail" />
                </a>
              </div>
              <div className="carousel-description">
                <span className="date">{projectData[currentIndex].date}</span>
                <h3>{projectData[currentIndex].title}</h3>
                <h4>{projectData[currentIndex].subtitle}</h4>
                <p>{projectData[currentIndex].description}</p>
                <p className="stack">{projectData[currentIndex].stack}</p>
                <a href={projectData[currentIndex].link} target="_blank" rel="noreferrer">
                  <h6 className="button-project">Voir le projet</h6>
                </a>
              </div>
            </div>
          </div>

        </div>
        
      </div>
    </div>
  );
}

export default Timeline;
