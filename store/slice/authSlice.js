import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addNewUser, loginUser } from "../../services/HTTPClient/HTTPClient";

export const signUp = createAsyncThunk(
  "auth/signUp",
  async (newUser, thunkAPI) => {
    try {
      const response = await addNewUser(newUser);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);
export const logIn = createAsyncThunk(
  "auth/logIn",
  async (userData, thunkAPI) => {
    try {
      const response = await loginUser(userData);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);
const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    token: null,
    isAuthenticated: false,
    loading: false,
    error: null,
  },
  reducers: {
    logOut(state) {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      localStorage.removeItem("authToken");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signUp.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(signUp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
    builder
      .addCase(logIn.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.loading = false;
        state.user = { id: action.payload.id };
        state.token = action.payload.token;
        state.isAuthenticated = true;
        localStorage.setItem("authToken", action.payload.token);
      })
      .addCase(logIn.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logOut } = authSlice.actions;
export default authSlice.reducer;
