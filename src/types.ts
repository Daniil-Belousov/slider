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

export interface SettingsI {
    navigation: boolean,
    loop: boolean,
    pagination: boolean,
    auto: boolean,
    stopMouseHover: boolean,
    delay: number,
    [key: string]: any;
}

export interface StateI {
  currentSlideIndex: number,
  slides: SlideI[],
  isLoading: boolean,
  error: boolean,
  settings: SettingsI,
}

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = ThunkDispatch<RootState, unknown, AnyAction>;