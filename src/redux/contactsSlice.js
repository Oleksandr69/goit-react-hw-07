import cardList from '../components/cardList.json';
import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'contacts',
  initialState: { items: cardList },
  reducers: {
    addContact: (state, action) => {
      const { id, name, number } = action.payload; // return {
      state.items.push({ id, name, number });
    },

    deleteContact: (state, action) => {
      state.items = state.items.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});

export const { addContact, deleteContact } = slice.actions;
export default slice.reducer;
