import { useRef, useState, useEffect } from 'react';
import { useIsInViewport } from './index.js';

const useScroll = () => {
  const [scrollKey, setScrollKey] = useState();

  const refs = {
    aboutRef: useRef(),
    portfolioRef: useRef(),
    experienceRef: useRef(),
    contactRef: useRef(),
  };

  const isInViewport = {
    about: useIsInViewport(refs.aboutRef),
    portfolio: useIsInViewport(refs.portfolioRef),
    experience: useIsInViewport(refs.experienceRef),
    contact: useIsInViewport(refs.contactRef),
  };

  useEffect(() => {
    if (isInViewport.about) setScrollKey('about');
  }, [isInViewport.about]);
  useEffect(() => {
    if (isInViewport.portfolio) setScrollKey('portfolio');
  }, [isInViewport.portfolio]);
  useEffect(() => {
    if (isInViewport.experience) setScrollKey('experience');
  }, [isInViewport.experience]);
  useEffect(() => {
    if (isInViewport.contact) setScrollKey('contact');
  }, [isInViewport.contact]);

  const scrollTo = (key) => {
    refs[`${key}Ref`].current.scrollIntoView({ behavior: 'smooth' });
  };

  return { ...refs, scrollKey, scrollTo };
};

export default useScroll;
