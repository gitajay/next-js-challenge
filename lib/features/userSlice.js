import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: '',
  loading: true,
  error: null,
  open: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.userData = action.payload;
      state.loading = false;
      state.error = null;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    setOpen: (state, action) => {
      state.open = action.payload;
    },
  },
});

export const { setUserData, setLoading, setError, setOpen } = userSlice.actions;

export default userSlice.reducer;