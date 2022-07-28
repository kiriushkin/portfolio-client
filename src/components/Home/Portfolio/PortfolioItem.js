import { useNavigate } from 'react-router-dom';
import { Badge } from 'baseui/badge';
import { Button } from 'baseui/button';

const PortfolioItem = ({ work }) => {
  const navigate = useNavigate();

  // work.previewUrl ?? `https://via.placeholder.com/450.jpg/${work.color}`

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
        <div className="portfolio-item__description">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate
          aspernatur assumenda sequi quia excepturi, repellendus quis fugit
          eligendi praesentium error.
        </div>

        <div className="portfolio-item__badges">
          <Badge shape="pill" content="Node" color="positive" />
          <Badge shape="pill" content="Express" color="positive" />
          <Badge shape="pill" content="PostgreSQL" color="positive" />
          <Badge shape="pill" content="React" color="negative" />
          <Badge shape="pill" content="Redux" color="negative" />
        </div>

        <div className="portfolio-item__visit">
          <Button
            kind="secondary"
            shape="pill"
            onClick={() => navigate(`/${work.name}`)}
          >
            Visit Website
          </Button>
        </div>

        <div className="portfolio-item__links">
          {!work.githubLink ? (
            <a href={work.githubLink}>
              <i className="fa-brands fa-github"></i>
            </a>
          ) : (
            ''
          )}
          {!work.apiLink ? (
            <a href={work.apiLink}>
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
