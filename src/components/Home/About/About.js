import './About.scss';
import { useContext } from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import AppContext from '../../../AppContext.js';
import HomeContext from '../HomeContext.js';
import me from '../../../assets/images/me.webp';

const About = () => {
  const {
    locale: { about },
  } = useContext(AppContext);
  const { aboutRef } = useContext(HomeContext);

  return (
    <>
      <section className="about about__wrapper temp-size" ref={aboutRef}>
        <h2
          className="home__section-title"
          dangerouslySetInnerHTML={{ __html: about.title }}
        ></h2>

        <div className="about__container ">
          <div className="home__section-subtitle about__description">
            {about.description}
          </div>

          <div className="about__photo">
            <img src={me} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
