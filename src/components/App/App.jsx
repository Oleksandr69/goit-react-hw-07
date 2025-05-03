import React from 'react';
import './App.css';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import ContactList from '../ContactList/ContactList';
import { fetchContacts } from '../../redux/contactsOps';
import { selectError, selectLoading } from '../../redux/contactsSlice';

const App = () => {

  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

    useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

      return (
      <div>
        <ContactForm
          />
          
        <SearchBox
          />

        {loading && !error && <b>Request in progress...</b>}
          
        <ContactList
          />
      
    </div>
  );
};

export default App
