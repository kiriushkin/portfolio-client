import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Badge } from 'baseui/badge';
import { Button } from 'baseui/button';
import AppContext from '../../../AppContext.js';
import HomeContext from '../HomeContext.js';

const PortfolioItem = ({ work }) => {
  const {
    locale: { portfolio },
  } = useContext(AppContext);
  const { tags } = useContext(HomeContext);

  const navigate = useNavigate();

  const redirect = (path) => {
    document.body.scrollIntoView({ behavior: 'smooth' });
    navigate(path);
  };

  return (
    <div className="portfolio-item portfolio-item__wrapper">
      <div className="portfolio-item__container portfolio-item__preview">
        <img
          src={
            work.previewUrl ??
            `https://via.placeholder.com/450.jpg/${work.color}`
          }
          alt=""
        />
      </div>
      <div className="portfolio-item__container portfolio-item__content">
        <div className="portfolio-item__title">{work.title}</div>
        <div className="portfolio-item__description">{work.description}</div>

        <div className="portfolio-item__badges">
          {work.tags.map((id) => {
            const tag = tags[tags.findIndex((tag) => tag.id === id)];

            return (
              <Badge
                key={id}
                shape="pill"
                content={tag?.name}
                color={tag?.color}
              />
            );
          })}
        </div>

        <div className="portfolio-item__visit">
          <Button
            kind="secondary"
            shape="pill"
            onClick={() => redirect(`/${work.name}`)}
          >
            {portfolio.visit}
          </Button>
        </div>

        <div className="portfolio-item__links">
          {work.githubLink ? (
            <a href={work.githubLink} target="_blank" rel="noreferrer">
              <i className="fa-brands fa-github"></i>
            </a>
          ) : (
            ''
          )}
          {work.apiLink ? (
            <a href={work.apiLink} target="_blank" rel="noreferrer">
              <i className="fa-solid fa-code"></i>
            </a>
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  );
};

export default PortfolioItem;
