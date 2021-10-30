import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAction = createAsyncThunk(
  "weather-fetch",
  async (payload, { rejectWithValue, getState, dispatch }) => {
    try {
      const {data} = await axios.get(
        `https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=2ByQz0FGdgJOGYmYyuM9PD9nnQYt9R0h&q=${payload}`
      );
      console.log("hi")
    return data     

    } catch (error) {
      if(!error?.response){
        throw error
      }
      return rejectWithValue(error?.response?.data)
    }
  }
);

const weatherSlice=createSlice({
  name:"weather",
  initialState:{data:"Loaded"},
  extraReducers:(builder)=>{
    builder.addCase(fetchAction.pending, (state, action)=>{
      state.loading=true;
    });
    builder.addCase(fetchAction.fulfilled,(state,action)=>{
      state.weather=action?.payload;
      state.loading=false;
      state.error=undefined;
    });
    builder.addCase(fetchAction.rejected,(state,action)=>{
      state.loading=false;
      state.weather=undefined;
      state.error=action?.payload
    })
  },
})

export default weatherSlice.reducer