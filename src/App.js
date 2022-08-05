import './App.scss';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home.js';
import Work from './components/Work/Work.js';
import AppContext from './AppContext.js';
import ruLocale from './locales/ru.json';
import enLocale from './locales/en.json';
import Admin from './components/Admin/Admin.js';

function App() {
  const [lang, setLang] = useState('');
  const [locale, setLocale] = useState(enLocale);

  useEffect(() => {
    const cacheLang = window.localStorage.lang;

    setLang(!!cacheLang ? cacheLang : 'eng');
  }, []);

  useEffect(() => {
    if (lang === '') return;

    window.localStorage.lang = lang;
    setLocale(lang === 'eng' ? enLocale : ruLocale);
  }, [lang]);

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
          <Route path="admin" element={<Admin />} />
          <Route path=":name" element={<Work />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
