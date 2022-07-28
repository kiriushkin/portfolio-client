import './Experience.scss';
import { useContext } from 'react';
import { Badge } from 'baseui/badge';
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
        <h2 className="home__section-title">{experience.title}</h2>
        <div className="experience__wrapper">
          <div className="experience__container experience__description">
            <div className="experience__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
              ipsum perferendis fugiat eum, excepturi quae recusandae neque rem?
              Veritatis sed debitis placeat quam. Molestias, quam?
            </div>

            <div className="experience__badges">
              <Badge content="HTML" hierarchy="secondary" color="warning" />
              <Badge content="CSS" hierarchy="secondary" color="warning" />
              <Badge
                content="JavaScript"
                hierarchy="secondary"
                color="warning"
              />
              <Badge content="React" hierarchy="secondary" color="negative" />
              <Badge content="Redux" hierarchy="secondary" color="negative" />
              <Badge content="Node" hierarchy="secondary" color="positive" />
              <Badge content="Express" hierarchy="secondary" color="positive" />
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
              <Badge content="Git" hierarchy="secondary" color="accent" />
              <Badge content="BEM" hierarchy="secondary" color="accent" />
            </div>
          </div>
          <div className="experience__container experience__charts">
            <div className="experience__steps">
              <div className="experience__step">
                <div className="experience__step-title">
                  Mentalstack (2021 - 2022)
                </div>
                <div className="experience__step-description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Asperiores sequi quisquam soluta exercitationem fuga expedita
                  maiores praesentium unde velit quaerat.
                </div>
              </div>

              <div className="experience__step">
                <div className="experience__step-title">Now</div>
                <div className="experience__step-description">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Fugit repellat beatae adipisci?
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Experience;
