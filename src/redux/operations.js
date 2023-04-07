import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
/* import { contacts } from "./contactsSlice"; */
/* import {
    fetchinProgress,
    fetchingSuccess,
    fetchingError
} from "./contactsSlice"; */


axios.defaults.baseURL = "https://642e89088ca0fe3352d22529.mockapi.io";


export const fetchContacts = createAsyncThunk(
    "contacts/fetchAll",
    async (_, thunkAPI) => {
    try {
        const response = await axios.get("/contacts")
         
  return response.data;
 }
    catch (e) {
        return thunkAPI.rejectWithValue(e.message)
 }
    
    });





export const addContacts = createAsyncThunk(
  "contacts/addContacts",
  async ({name, number}, thunkAPI) => {
    try {
      const response = await axios.post("/contacts", { name, number });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContacts",
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);