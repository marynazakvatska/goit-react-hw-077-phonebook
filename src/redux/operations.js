
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


axios.defaults.baseURL = "https://64300ee6c26d69edc889e636.mockapi.io";



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
  async (contact, thunkAPI) => {
    try {
        const response = await axios.post("/contacts",  contact );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);