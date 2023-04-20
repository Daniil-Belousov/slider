import React, { useEffect } from 'react';
import Pagination from '@components/Pagination';
import { Wrapper, ImgContainer, Subscription} from './style';
import { RootState } from '@src/types';
import { useDispatch, useSelector } from 'react-redux';
import { nextSlide, setContinue, setPause } from '@src/reducers/mainSlice';

const Slider = () => {
  const dispatch = useDispatch();
  const { 
    currentSlideIndex, 
    isLoading, 
    error, 
    slides, 
    pause,
    settings: {
      delay, 
      auto, 
      loop, 
      stopMouseHover
    }} = useSelector((state: RootState) => state.main);

  useEffect(() => {
    if (!auto || pause) return;

    const interval = setInterval(() => {
      dispatch(nextSlide())
    }, delay*1000);

    return () => {
      clearInterval(interval);
    };
  }, [auto, delay, loop, stopMouseHover, pause, dispatch])

  if(isLoading) {
    return <h2>Loading, please wait...</h2>
  }

  if(error) {
    return <h2>Ooops, something went wrong...</h2>
  }

  return (
    <Wrapper
      onMouseEnter={() => stopMouseHover && dispatch(setPause())} 
      onMouseLeave={() => dispatch(setContinue())}
    >
      <h2>{currentSlideIndex + 1} from {slides.length}</h2>
      <ImgContainer src={slides[currentSlideIndex]?.url}/>
      <Subscription>{slides[currentSlideIndex]?.title}</Subscription>
      <Pagination/>
    </Wrapper>
  )
}

export default Slider;