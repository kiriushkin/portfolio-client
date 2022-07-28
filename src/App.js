import './App.scss';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home.js';
import Work from './components/Work/Work.js';
import AppContext from './AppContext.js';
import ruLocale from './locales/ru.json';
import enLocale from './locales/en.json';

function App() {
  const [lang, setLang] = useState('eng');
  const [locale, setLocale] = useState(enLocale);

  useEffect(() => {
    setLocale(lang === 'eng' ? enLocale : ruLocale);
  }, [lang]);

  useEffect(() => {
    document.title = locale.title;
  }, [locale]);

  return (
    <AppContext.Provider
      value={{
        locale,
        lang,
        setLang,
      }}
    >
      <div className="app">
        <Routes>
          <Route path=":name" element={<Work />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
