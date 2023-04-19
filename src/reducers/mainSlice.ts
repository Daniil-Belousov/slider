import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { StateI } from "@src/types";

const initialState: StateI = {
  currentSlideIndex: 0,
  slides: [],
  isLoading: false,
  error: false,
  settings: {
    navigation: true,
    pagination: true,
    loop: true,
    auto: false,
    delay: 3,
    stopMouseHover: true,
  }
}

export const fetchSlides = createAsyncThunk(
  'slides/fetchSlides',
  async function() {
    const response = await fetch ('https://jsonplaceholder.typicode.com/photos?_limit=10');
    return await response.json();
  }
);

const mainSlice = createSlice({
  name: 'slides',
  initialState,
  reducers: {
    nextSlide(state) {
        if(state.currentSlideIndex === state.slides.length - 1) {
          state.currentSlideIndex = 0
        } else {
          state.currentSlideIndex += 1;
        }
    },
    prevSlide(state) {
      if(state.currentSlideIndex === 0) {
        state.currentSlideIndex = state.slides.length - 1;
      } else {
        state.currentSlideIndex -= 1; 
      }
    },
    setNav(state) {
      state.settings.navigation = !state.settings.navigation;
    },
    setPag(state) {
      state.settings.pagination = !state.settings.pagination;
    },
    setLoop(state) {
      state.settings.loop = !state.settings.loop;
    },
    setAuto(state) {
      state.settings.auto = !state.settings.auto;
    },
    setDelay(state, action) {
      state.settings.delay = action.payload;
    },
    setStopMouseHover(state) {
      state.settings.stopMouseHover = !state.settings.stopMouseHover;
    }
  },
  extraReducers: {
    [(fetchSlides.pending as unknown) as string]: ( state: StateI ) => {
        state.isLoading = true;
        state.error = false;
     },
     [(fetchSlides.fulfilled as unknown) as string]: (state: StateI, action: { payload: any; }) => {
        state.isLoading = false;
        state.slides = action.payload;
     },
     [(fetchSlides.rejected as unknown) as string]: (state: StateI) => {
        state.isLoading = false;
        state.error = true;
     },
  }
})

export default mainSlice.reducer;
export const {nextSlide, prevSlide, setNav, setPag, setLoop, setAuto, setDelay, setStopMouseHover} = mainSlice.actions; 