// import cardList from '../components/cardList.json';
import { createSlice } from '@reduxjs/toolkit';
import { fetchContactsThunk, deleteContactThunk } from './contactsOps';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    addContact: (state, action) => {
      state.contacts.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter(
        contact => contact.id !== action.payload
      );
    },
  },

  extraReducers: builder => {
    builder
      // .addCase(fetchContacts.pending, state => {
      //   state.isLoading = true;
      // })
      .addCase(fetchContactsThunk.fulfilled, (state, action) => {
        // state.isLoading = false;
        // state.error = null;
        state.contacts = action.payload;
        // const { id, name, number } = action.payload;
        // state.items.push({ id, name, number });
      })
      .addCase(fetchContactsThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      //     .addCase(addContact.pending, state => {
      //       state.isLoading = true;
      //     })
      //     .addCase(addContact.fulfilled, (state, action) => {
      //       state.isLoading = false;
      //       state.error = null;
      //       state.items.push(action.payload);
      //     })
      //     .addCase(addContact.rejected, (state, action) => {
      //       state.isLoading = false;
      //       state.error = action.payload;
      //     })
      //     .addCase(deleteContact.pending, state => {
      //       state.isLoading = true;
      //     })
      .addCase(deleteContactThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.contacts = state.contacts.filter(
          contact => contact.id !== action.payload
        );
      });
    //     .addCase(deleteContact.rejected, (state, action) => {
    //       state.isLoading = false;
    //       state.error = action.payload;
    //     });
    // },

    // deleteContact: (state, action) => {
    //   state.items = state.items.filter(contact => contact.id !== action.payload);
    // }
  },
});

// export const { addContact, deleteContact } = contactsSlice.actions;
export default contactsSlice.reducer;
