import { useEffect, useState } from 'react';
import axios from 'axios';
import config from '../config/config.js';

const { API_URL, AUTH_URL, AUTH_OPTIONS } = config;

const authUrl =
  AUTH_URL +
  '?' +
  Object.entries(AUTH_OPTIONS)
    .map((option) => `${option[0]}=${option[1]}`)
    .join('&');

const useAuth = () => {
  const [token, setToken] = useState('');
  const [user, setUser] = useState({});
  const [isAllowed, setIsAllowed] = useState(false);

  useEffect(() => {
    const cacheToken = window.localStorage.token;
    const cacheUser = window.localStorage.user;

    if (cacheToken) setToken(cacheToken);

    if (cacheUser) setUser(JSON.parse(cacheUser));
  }, [setToken, setUser]);

  useEffect(() => {
    if (!token) return;

    window.localStorage.token = token;
    auth(token);
  }, [token]);

  useEffect(() => {
    if (!user.id) return;

    window.localStorage.user = JSON.stringify(user);
  }, [user]);

  const getToken = async (code) => {
    try {
      const { data: token } = await axios.get(API_URL + 'token', {
        params: { code },
      });

      if (!token) return;

      setToken(token);
      return token;
    } catch (err) {
      console.error(err.response.data);
    }
  };

  const getUser = async (token) => {
    try {
      const { data } = await axios.post(API_URL + 'token', {
        token,
      });

      if (data) setUser(data);
    } catch (err) {
      console.error(err.response.data);
    }
  };

  const auth = async (token) => {
    try {
      await axios.post(
        API_URL + 'token/auth',
        {},
        {
          headers: {
            Authorization: token,
          },
        }
      );

      setIsAllowed(true);
    } catch (err) {
      console.error(err.response.data);
    }
  };

  const logout = () => {
    delete window.localStorage.token;
    delete window.localStorage.user;

    setToken('');
    setUser({});
    setIsAllowed(false);
  };

  return { token, user, isAllowed, authUrl, getToken, getUser, auth, logout };
};

export default useAuth;
