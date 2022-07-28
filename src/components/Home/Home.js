import './Home.scss';
import { useState, useEffect } from 'react';
import { useScroll, useApi } from '../../hooks/index.js';
import HomeContext from './HomeContext.js';
import Header from './Header/Header.js';
import About from './About/About.js';
import Portfolio from './Portfolio/Portfolio.js';
import Experience from './Experience/Experience.js';
import Contact from './Contact/Contact.js';
import Loader from '../Loader/Loader.js';

const Home = () => {
  const api = useApi();
  const scroll = useScroll();
  const [activeKey, setActiveKey] = useState('about');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      await api.getWorks();
      setIsLoading(false);
    })();
  }, []);

  return (
    <HomeContext.Provider
      value={{ ...scroll, ...api, activeKey, setActiveKey }}
    >
      <Loader isLoading={isLoading} />
      <Header />
      <main className={(isLoading ? 'loading ' : '') + 'home home__wrapper'}>
        <div className="home__container">
          <About />
          <Portfolio />
          <Experience />
          <Contact />
        </div>
      </main>
    </HomeContext.Provider>
  );
};

export default Home;
