import React from 'react';
import './App.css';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import ContactList from '../ContactList/ContactList';
import { fetchContactsThunk } from '../../redux/contactsOps';

const App = () => {

  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.contacts.isLoading);
  const error = useSelector((state) => state.contacts.error);

    useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

      return (
      <div>
        <ContactForm
          />
          
        <SearchBox
          />

        {isLoading && !error && <b>Request in progress...</b>}
          
        <ContactList
          />
      
    </div>
  );
};

export default App
