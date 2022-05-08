import { createSlice, configureStore } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { counter: 0, showCounter: true },
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const authSlice = createSlice({
  name: "authentification",
  initialState: { isLoged: false },
  reducers: {
    login(state) {
      state = state.isLoged = true;
      console.log("loggedIn");
    },
    logout(state) {
      state = state.isLoged = false;
    },
  },
});

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    authentification: authSlice.reducer,
  },
});
export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;
export default store;
