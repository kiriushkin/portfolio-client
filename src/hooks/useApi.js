import { useState } from 'react';
import axios from 'axios';

// const API_URL =
//   process.env.NODE_ENV === 'production'
//     ? 'https://api.kiriushkin.pro/portfolio/api/'
//     : 'http://localhost:5000/api/';
const API_URL = 'https://api.kiriushkin.pro/portfolio/api/';

const useApi = () => {
  const [works, setWorks] = useState([]);
  const [tags, setTags] = useState([]);

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

  const addWork = async (work) => {
    try {
      const { data } = await axios.post(API_URL + 'works', { ...work });

      setWorks([...works, data]);
    } catch (err) {
      console.error(err);
    }
  };

  const updateWork = async (work) => {
    try {
      const { data } = await axios.put(API_URL + 'works', { ...work });

      const newWorks = [...works];
      newWorks[newWorks.findIndex((item) => item.id === data.id)] = data;

      setWorks([...newWorks]);
    } catch (err) {
      console.error(err);
    }
  };

  const deleteWork = async (id) => {
    try {
      await axios.delete(API_URL + 'works', { data: { id } });

      setWorks([...works.filter((item) => item.id !== id)]);
    } catch (err) {
      console.error(err);
    }
  };

  const getTags = async () => {
    try {
      const { data } = await axios.get(API_URL + 'tags');

      setTags(data);
    } catch (err) {
      console.error(err);
    }
  };

  const addTag = async (tag) => {
    try {
      const { data } = await axios.post(API_URL + 'tags', { ...tag });

      setTags([...tags, data]);
    } catch (err) {
      console.error(err);
    }
  };

  const updateTag = async (tag) => {
    try {
      const { data } = await axios.put(API_URL + 'tags', { ...tag });

      const newTags = [...tags];
      newTags[newTags.findIndex((item) => item.id === data.id)] = data;

      setTags([...newTags]);
    } catch (err) {
      console.error(err);
    }
  };

  const deleteTag = async (id) => {
    try {
      await axios.delete(API_URL + 'tags', { data: { id } });

      setTags([...tags.filter((item) => item.id !== id)]);
    } catch (err) {
      console.error(err);
    }
  };

  return {
    works,
    getWork,
    getWorks,
    addWork,
    updateWork,
    deleteWork,
    tags,
    getTags,
    addTag,
    updateTag,
    deleteTag,
  };
};

export default useApi;
