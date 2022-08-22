import './Portfolio.scss';
import { useState, useContext } from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { Button } from 'baseui/button';
import AppContext from '../../../AppContext.js';
import HomeContext from '../HomeContext.js';
import PortfolioItem from './PortfolioItem.js';

const Portfolio = () => {
  const {
    locale: { portfolio },
  } = useContext(AppContext);
  const { works, portfolioRef } = useContext(HomeContext);

  const [worksAmount, setWorksAmount] = useState(2);

  return (
    <section className="portfolio temp-size" ref={portfolioRef}>
      <AnimationOnScroll animateIn="animate__fadeInLeft" animateOnce>
        <h2 className="home__section-title">{portfolio.title}</h2>
      </AnimationOnScroll>
      <AnimationOnScroll animateIn="animate__fadeIn" animateOnce>
        <div className="portfolio__container">
          {works.slice(0, worksAmount).map((work) => (
            <PortfolioItem key={work.id} work={work} />
          ))}
          {works.length > worksAmount ? (
            <Button
              shape="pill"
              onClick={() => setWorksAmount(worksAmount + 2)}
            >
              {portfolio.more}
            </Button>
          ) : (
            ''
          )}
        </div>
      </AnimationOnScroll>
    </section>
  );
};

export default Portfolio;
