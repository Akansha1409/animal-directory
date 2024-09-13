import { configureStore } from '@reduxjs/toolkit';
import { animalReducer } from './reducers/animalReducer';

const store = configureStore({
  reducer: animalReducer
});

export default store;
