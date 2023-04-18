import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import rootReducer from './reducers';

export interface SlideI {
  albumId : number,
  id: number,
  thumbnailUrl: string,
  title: string,
  url: string
}

export interface StateI {
  currentSlideIndex: number,
  slides: SlideI[],
  isLoading: boolean,
  error: boolean,
}

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = ThunkDispatch<RootState, unknown, AnyAction>;