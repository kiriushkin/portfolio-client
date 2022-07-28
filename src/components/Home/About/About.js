import './About.scss';
import { useContext } from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import AppContext from '../../../AppContext.js';
import HomeContext from '../HomeContext.js';

const About = () => {
  const {
    locale: { about },
  } = useContext(AppContext);
  const { aboutRef } = useContext(HomeContext);

  return (
    <>
      <section className="about about__wrapper temp-size" ref={aboutRef}>
        <h2 className="home__section-title">{about.title}</h2>

        <div className="about__container ">
          <div className="home__section-text about__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            voluptatum magni explicabo.
          </div>

          <div className="about__photo">
            <img src="https://via.placeholder.com/550" alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
