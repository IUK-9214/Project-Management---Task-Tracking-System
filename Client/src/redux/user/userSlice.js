import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentuser: null,
  error: null,    
  loading: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signInStart: (state) => {
      state.loading = true;
      state.error = null; 
    },
    signInSuccess: (state, action) => {
      state.currentuser = action.payload;
      state.loading = false;
      state.error = null;
    },
    signInFaluire: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    
    signOut: (state) => {
      state.currentuser = null;
      state.error = null;
      state.loading = false;
    },
  },
})

export const { signInStart, signInSuccess, signInFaluire, signOut } = userSlice.actions;
export default userSlice.reducer;
