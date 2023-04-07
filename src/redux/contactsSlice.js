import { createSlice } from "@reduxjs/toolkit";
import { addContacts, deleteContact, fetchContacts } from "./operations";
import { nanoid } from 'nanoid'



const contactsInitialState = {
    items: [],
    isLoading: false,
    error: null
};
  
const handlePending = state => {
  state.contacts.isLoading = true;
};
const handleRejected = (state, action) => {
  state.contacts.isLoading = false;
  state.contacts.error = action.payload;
};

const contactSlice = createSlice({
  name: "contacts",
  initialState: contactsInitialState,
/*   reducers: {
    addContacts: {
          reducer(state, action) {
         state.push(action.payload)
      },
      prepare({name, number}) {
        return {
          payload: {
                name,
                number,
            id: nanoid(),
          },
        };
      },
    },
    deleteContact(state, action) {
        const index = state.findIndex(contact => contact.id === action.payload);
      state.splice(index, 1);
    }, */

 

  extraReducers: {


 [fetchContacts.pending]: handlePending,
     [fetchContacts.fulfilled](state, action) {
        state.contacts.isLoading = false;
     state.contacts.error = null;
      state.contacts.items = action.payload;  
    },
     [fetchContacts.rejected]: handleRejected,


 
    [addContacts.pending]: handlePending,
    [addContacts.fulfilled](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      state.contacts.items.push(action.payload);
    },
    [addContacts.rejected]: handleRejected,
    
    
    
     [deleteContact.pending]: handlePending,
    [deleteContact.fulfilled](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      const index = state.contacts.items.findIndex(
        contact => contact.id === action.payload.id
      );
      state.contacts.items.splice(index, 1);
    },
    [deleteContact.rejected]:handleRejected,
  },
});


/* export const { addContacts, deleteContact } = contactSlice.actions; */
/* export const { fetchinProgress, fetchingSuccess, fetchingError } = contactSlice.actions; */
export const contactsReducer = contactSlice.reducer;

