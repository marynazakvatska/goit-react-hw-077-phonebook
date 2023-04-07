import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
/* import { contacts } from "./contactsSlice"; */
/* import {
    fetchinProgress,
    fetchingSuccess,
    fetchingError
} from "./contactsSlice"; */


axios.defaults.baseURL = "https://642e89088ca0fe3352d22529.mockapi.io";


/* fetch("https://642e89088ca0fe3352d22529.mockapi.io/contacts").then(response=>response.json).then(data=>console.log(data))
 */
/* async function logJSONData() {
  const response = await fetch("https://642e89088ca0fe3352d22529.mockapi.io/contacts");
  const jsonData = await response.json();
  console.log(jsonData);
} */





export const fetchContacts = createAsyncThunk(
    "contacts/fetchAll",
    async (_, thunkAPI) => {
    try {
        const response = await axios.get("/contacts")
            console.log(response.data);
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