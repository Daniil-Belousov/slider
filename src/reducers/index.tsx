import { combineReducers } from '@reduxjs/toolkit';
import mainSlice from './mainSlice';

const rootReducer = combineReducers({
  main: mainSlice,
});

export default rootReducer;
