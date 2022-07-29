import './Work.scss';
import { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useApi } from '../../hooks/index.js';
import { Button } from 'baseui/button';
import { ArrowLeft } from 'baseui/icon';
import AppContext from '../../AppContext.js';
import Loader from '../Loader/Loader.js';

const Work = () => {
  const { getWork } = useApi();
  const navigate = useNavigate();
  const { name } = useParams();
  const {
    locale: { work: workLocale },
  } = useContext(AppContext);

  const [work, setWork] = useState('');
  const [isShown, setIsShown] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (work) document.title = work.title;
  }, [work]);

  useEffect(() => {
    (async () => {
      const result = await getWork(name);

      if (!result) navigate('/');

      setWork(result);
      setIsLoading(false);
    })();
  }, [name, navigate]);

  return (
    <div className="work">
      <Loader isLoading={isLoading} />
      <div
        className={(isShown ? 'show ' : '') + 'work__back'}
        onClick={() => setIsShown(!isShown)}
      >
        <Button
          kind="tertiary"
          colors={{ color: 'white', backgroundColor: 'transparent' }}
          startEnhancer={() => <ArrowLeft size={32} />}
          onClick={() => navigate('/')}
        >
          {workLocale.back}
        </Button>
      </div>
      <iframe
        src={work?.liveLink ? work.liveLink : ''}
        frameBorder="0"
        title={name}
      ></iframe>
    </div>
  );
};

export default Work;
