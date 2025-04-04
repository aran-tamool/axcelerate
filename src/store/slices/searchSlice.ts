import { ContactType } from '@/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { testContactData } from './contactsData';



interface ContactsState {
  contacts: ContactType[];
  searchResults: ContactType[];
}

const initialState: ContactsState = {
  contacts: testContactData,
  searchResults: testContactData,
};

const SearchSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action: PayloadAction<ContactType>) => {
      state.contacts.push(action.payload);
    },
    removeContact: (state, action: PayloadAction<string>) => {
      state.contacts = state.contacts.filter((contact) => contact.name !== action.payload);
    },
    searchContact: (state, action: PayloadAction<string>) => {
      const searchTerm = action.payload.toLowerCase();
    
      if (!searchTerm) {
        state.searchResults = state.contacts;
      } else {
        state.searchResults = state.contacts.filter((contact) => {
          const contactNameLower = contact.name.toLowerCase();
          const contactEmailLower = contact.email ? contact.email.toLowerCase() : '';
    
          return (
            contactNameLower.startsWith(searchTerm) ||
            contactEmailLower.startsWith(searchTerm)
          );
        });
      }
    },
  },
});

export const { addContact, removeContact,searchContact } = SearchSlice.actions;
export default SearchSlice.reducer;
