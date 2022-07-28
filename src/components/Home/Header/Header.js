import './Header.scss';
import { useContext, useState, useEffect } from 'react';
import { Tabs, Tab } from 'baseui/tabs-motion';
import AppContext from '../../../AppContext.js';
import HomeContext from '../HomeContext.js';

const TabsOverride = {
  TabList: {
    style: { flex: 1 },
  },
};

const TabOverride = {
  Tab: {
    style: { justifyContent: 'center' },
  },
  TabPanel: {
    style: { display: 'none' },
  },
};

const Header = () => {
  const {
    locale: { header },
    lang,
    setLang,
  } = useContext(AppContext);
  const { scrollKey, scrollTo, activeKey, setActiveKey } =
    useContext(HomeContext);

  const [isOpen, setIsOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  const clickHandler = (e) => {
    const key = e.target.id.match(/[a-z]{0,}$/)[0];
    setIsOpen(false);
    setIsScrolling(true);
    scrollTo(key);
    setTimeout(() => setIsScrolling(false), 400);
  };

  useEffect(() => {
    if (!isScrolling) setActiveKey(scrollKey);
  }, [scrollKey]);

  return (
    <header className="header">
      <div className="header__hamburger" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? (
          <i className="fa-solid fa-xmark"></i>
        ) : (
          <i className="fa-solid fa-bars"></i>
        )}
      </div>
      <div className={(isOpen ? 'mobile-open ' : '') + 'header__container'}>
        <div className="header__logo">
          <img src="https://via.placeholder.com/250.jpg" alt="" />
        </div>
        <Tabs
          orientation="vertical"
          overrides={TabsOverride}
          activeKey={activeKey}
          onChange={({ activeKey }) => setActiveKey(activeKey)}
        >
          <Tab
            key="about"
            title={header.about}
            overrides={TabOverride}
            onClick={clickHandler}
          />
          <Tab
            key="portfolio"
            title={header.portfolio}
            overrides={TabOverride}
            onClick={clickHandler}
          />
          <Tab
            key="experience"
            title={header.experience}
            overrides={TabOverride}
            onClick={clickHandler}
          />
          <Tab
            key="contact"
            title={header.contact}
            overrides={TabOverride}
            onClick={clickHandler}
          />
        </Tabs>
        <div
          className="header__lang"
          onClick={() => setLang(lang === 'eng' ? 'ru' : 'eng')}
        >
          <div className={'header__lang-knob ' + lang}></div>
          <div className="header__lang-label">ru</div>
          <div className="header__lang-label">en</div>
        </div>

        <div className="header__links">
          <a href="https://t.me/kiriushkin" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-telegram"></i>
          </a>

          <a
            href="https://github.com/kiriushkin"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-github"></i>
          </a>

          <a href="mailto:kiriushkindmitrii@gmail.com">
            <i className="fa-solid fa-envelope"></i>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
