import { configureStore } from '@reduxjs/toolkit';
import charactersReducer from '../store/features/characterSlice';

const store = configureStore({
  reducer: {
    characters: charactersReducer,
  },
});

export default store;


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
