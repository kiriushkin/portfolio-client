import './Admin.scss';
import { useState, useEffect } from 'react';
import Modal from './Modal.js';
import Works from './Works.js';
import Tags from './Tags.js';
import AdminContext from './AdminContext.js';
import { useApi } from '../../hooks/index.js';

const Admin = () => {
  const api = useApi();
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
      value={{ ...api, value, setValue, modalState, setModalState }}
    >
      <div className="admin admin__wrapper">
        <Modal />

        <div className="admin__container">
          <Works />
          <Tags />
        </div>
      </div>
    </AdminContext.Provider>
  );
};

export default Admin;
