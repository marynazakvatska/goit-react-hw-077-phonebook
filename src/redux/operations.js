
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


axios.defaults.baseURL = "https://642e89088ca0fe3352d22529.mockapi.io";




/* fetch('https://642e89088ca0fe3352d22529.mockapi.io/contacts', {
  method: 'GET',
  headers: {'content-type':'application/json'},
}).then(res => {
  if (res.ok) {
      return res.json();
  }
  // handle error
}).then(contacts => {
  console.log(contacts)
}).catch(error => {
  // handle error
}) */





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