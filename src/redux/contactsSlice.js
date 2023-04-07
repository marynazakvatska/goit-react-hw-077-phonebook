import { createSlice } from "@reduxjs/toolkit";
import { addContacts, deleteContact, fetchContacts } from "./operations";


const contactsInitialState = {
    items: [],
    isLoading: false,
    error: null
};
  
const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
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
        state.isLoading = false;
     state.error = null;
      state.items = action.payload;  
    },
     [fetchContacts.rejected]: handleRejected,


 
    [addContacts.pending]: handlePending,
    [addContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [addContacts.rejected]: handleRejected,
    
    
    
     [deleteContact.pending]: handlePending,
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        contact => contact.id === action.payload.id
      );
      state.items.splice(index, 1);
    },
    [deleteContact.rejected]:handleRejected,
  },
});


/* export const { addContacts, deleteContact } = contactSlice.actions; */
/* export const { fetchinProgress, fetchingSuccess, fetchingError } = contactSlice.actions; */
export const contactsReducer = contactSlice.reducer;

