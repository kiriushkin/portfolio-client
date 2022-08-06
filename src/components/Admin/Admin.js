import './Admin.scss';
import { useState, useEffect } from 'react';
import { useApi, useAuth } from '../../hooks/index.js';
import { Button } from 'baseui/button';
import AdminContext from './AdminContext.js';
import Modal from './Modal.js';
import Works from './Works.js';
import Tags from './Tags.js';
import Auth from './Auth.js';

const Admin = () => {
  const api = useApi();
  const auth = useAuth();
  const { getTags, getWorks } = api;

  const [value, setValue] = useState({});
  const [modalState, setModalState] = useState({
    type: 'work',
    action: 'add',
    isOpen: false,
  });

  useEffect(() => {
    getWorks();
    getTags();
  }, []);

  return (
    <AdminContext.Provider
      value={{ ...api, ...auth, value, setValue, modalState, setModalState }}
    >
      <div className="admin admin__wrapper">
        {auth.user.id ? (
          <header className="admin__header">
            <div className="admin__header-username">{auth.user.login}</div>
            <div className="admin__header-avatar">
              <img src={auth.user.avatar_url} alt="ava" />
            </div>
            <Button size="compact" onClick={auth.logout}>
              <i className="fa-solid fa-arrow-right-from-bracket"></i>
            </Button>
          </header>
        ) : (
          ''
        )}

        {auth.isAllowed ? (
          <>
            <Modal />
            <div className="admin__container">
              <Works />
              <Tags />
            </div>
          </>
        ) : (
          <Auth />
        )}
      </div>
    </AdminContext.Provider>
  );
};

export default Admin;
