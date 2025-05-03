import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://6815e7cb32debfe95dbcc64f.mockapi.io';

export const fetchContactsThunk = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');

      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// export const addContact = createAsyncThunk(
//   'contacts/addContact',
//   async (text, thunkAPI) => {
//     try {
//       const response = await axios.post('/contacts', { text });
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

export const deleteContactThunk = createAsyncThunk(
  'contacts/deleteContactThunk',
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${id}`);
      return response.data.id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
