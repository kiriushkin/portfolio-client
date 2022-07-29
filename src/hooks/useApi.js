import { useState } from 'react';
import axios from 'axios';

// const API_URL =
//   process.env.NODE_ENV === 'production'
//     ? 'https://api.kiriushkin.pro/portfolio/api/'
//     : 'http://localhost:5000/api/';
const API_URL = 'https://api.kiriushkin.pro/portfolio/api/';

const useApi = () => {
  const [works, setWorks] = useState([]);

  const getWork = async (name) => {
    try {
      const { data } = await axios.get(API_URL + 'works/' + name);

      return data;
    } catch (err) {
      console.error(err);
    }
  };

  const getWorks = async () => {
    try {
      const { data } = await axios.get(API_URL + 'works');

      setWorks(data);
    } catch (err) {
      console.error(err);
    }
  };

  return { works, getWork, getWorks };
};

export default useApi;
