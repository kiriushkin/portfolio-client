import './Portfolio.scss';
import { useContext } from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import AppContext from '../../../AppContext.js';
import HomeContext from '../HomeContext.js';
import PortfolioItem from './PortfolioItem.js';

const Portfolio = () => {
  const {
    locale: { portfolio },
  } = useContext(AppContext);
  const { works, portfolioRef } = useContext(HomeContext);

  return (
    <section className="portfolio temp-size" ref={portfolioRef}>
      <h2 className="home__section-title">{portfolio.title}</h2>
      <div className="home__section-text">{portfolio.description}</div>
      <div className="portfolio__container">
        {works.map((work) => (
          <PortfolioItem key={work.id} work={work} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
