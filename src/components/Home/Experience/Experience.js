import './Experience.scss';
import { useContext } from 'react';
import { Badge } from 'baseui/badge';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import AppContext from '../../../AppContext.js';
import HomeContext from '../HomeContext.js';

const Experience = () => {
  const {
    locale: { experience },
  } = useContext(AppContext);
  const { experienceRef } = useContext(HomeContext);

  return (
    <>
      <section className="experience" ref={experienceRef}>
        <AnimationOnScroll animateOnce animateIn="animate__fadeInLeft">
          <h2 className="home__section-title">{experience.title}</h2>
        </AnimationOnScroll>
        <div className="experience__wrapper">
          <div className="experience__container experience__description">
            <AnimationOnScroll animateOnce animateIn="animate__fadeInLeft">
              <div className="experience__text">{experience.description}</div>

              <div className="experience__badges">
                <Badge content="HTML" hierarchy="secondary" color="warning" />
                <Badge content="CSS" hierarchy="secondary" color="warning" />
                <Badge content="SASS" hierarchy="secondary" color="warning" />
                <Badge
                  content="JavaScript"
                  hierarchy="secondary"
                  color="warning"
                />
                <Badge content="React" hierarchy="secondary" color="negative" />
                <Badge content="Redux" hierarchy="secondary" color="negative" />
                <Badge content="Node" hierarchy="secondary" color="positive" />
                <Badge
                  content="Express"
                  hierarchy="secondary"
                  color="positive"
                />
                <Badge
                  content="PostgreSQL"
                  hierarchy="secondary"
                  color="positive"
                />
                <Badge
                  content="Socket.io"
                  hierarchy="secondary"
                  color="positive"
                />
                <Badge
                  content="REST API"
                  hierarchy="secondary"
                  color="positive"
                />
                <Badge content="Git" hierarchy="secondary" color="accent" />
                <Badge content="BEM" hierarchy="secondary" color="accent" />
              </div>
            </AnimationOnScroll>
          </div>

          <div className="experience__container experience__charts">
            <AnimationOnScroll animateOnce animateIn="animate__fadeInRight">
              <div className="experience__steps">
                {experience.steps.map((step, index) => (
                  <div className="experience__step" key={index}>
                    <div className="experience__step-title">{step.title}</div>
                    <div className="experience__step-description">
                      {step.description}
                    </div>
                  </div>
                ))}
              </div>
            </AnimationOnScroll>
          </div>
        </div>
      </section>
    </>
  );
};

export default Experience;
