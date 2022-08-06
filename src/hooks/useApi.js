import { useState } from 'react';
import axios from 'axios';
import config from '../config/config.js';

const { API_URL } = config;

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
      const token = window.localStorage.token;
      const { data } = await axios.post(
        API_URL + 'works',
        { ...work },
        { headers: { Authorization: token } }
      );

      setWorks([...works, data]);
    } catch (err) {
      console.error(err);
    }
  };

  const updateWork = async (work) => {
    try {
      const token = window.localStorage.token;
      const { data } = await axios.put(
        API_URL + 'works',
        { ...work },
        { headers: { Authorization: token } }
      );

      const newWorks = [...works];
      newWorks[newWorks.findIndex((item) => item.id === data.id)] = data;

      setWorks([...newWorks]);
    } catch (err) {
      console.error(err);
    }
  };

  const deleteWork = async (id) => {
    try {
      const token = window.localStorage.token;
      await axios.delete(API_URL + 'works', {
        data: { id },
        headers: { Authorization: token },
      });

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
      const token = window.localStorage.token;
      const { data } = await axios.post(
        API_URL + 'tags',
        { ...tag },
        { headers: { Authorization: token } }
      );

      setTags([...tags, data]);
    } catch (err) {
      console.error(err);
    }
  };

  const updateTag = async (tag) => {
    try {
      const token = window.localStorage.token;
      const { data } = await axios.put(
        API_URL + 'tags',
        { ...tag },
        { headers: { Authorization: token } }
      );

      const newTags = [...tags];
      newTags[newTags.findIndex((item) => item.id === data.id)] = data;

      setTags([...newTags]);
    } catch (err) {
      console.error(err);
    }
  };

  const deleteTag = async (id) => {
    try {
      const token = window.localStorage.token;
      await axios.delete(API_URL + 'tags', {
        data: { id },
        headers: { Authorization: token },
      });

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
