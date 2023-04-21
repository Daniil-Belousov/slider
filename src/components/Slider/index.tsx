import React, { useEffect } from 'react';
import Navigation from '@src/components/Navigation';
import { Wrapper, ImgContainer, Subscription} from './style';
import { StateI } from '@src/types';

interface PropsI {
  state: StateI,
  setState: (state: StateI) => void
  isOpenModal: boolean,
}

const Slider = ({ state, setState, isOpenModal }: PropsI) => {
  const { 
    currentSlideIndex, 
    slides, 
    isLoading, 
    pause, 
    error, 
    settings: { 
      stopMouseHover, 
      auto, 
      delay, 
      loop 
    }} = state;

    const nextSlide = () => {
      if(loop){
        if(currentSlideIndex < slides.length - 1) {
          setState({...state, currentSlideIndex: currentSlideIndex + 1})
        } else {
          setState({...state, currentSlideIndex: 0})
        }
      } else {
        if(currentSlideIndex < slides.length - 1) {
          setState({...state, currentSlideIndex: currentSlideIndex + 1})
        }
      }
    }

    const prevSlide = () => {
      if(loop) {
        if(currentSlideIndex > 0) {
          setState({...state, currentSlideIndex: currentSlideIndex - 1})
        } else {
          setState({...state, currentSlideIndex: slides.length - 1})
        }
      } else {
        if(currentSlideIndex > 0) {
          setState({...state, currentSlideIndex: currentSlideIndex - 1})
        }
      }
    }

    const setPause = () => {
      setState({...state, pause: true})
    }

    const setContinue = () => {
      setState({...state, pause: false})
    }

  useEffect(() => {
    if (!auto || pause || !slides.length || isOpenModal) return;

    const interval = setInterval(() => {
      nextSlide();
    }, delay*1000);

    return () => {
      clearInterval(interval);
    };
  }, [auto, delay, loop, stopMouseHover, pause, currentSlideIndex, slides.length, isOpenModal])

  if(isLoading) {
    return <h2>Loading, please wait...</h2>
  }

  if(error) {
    return <h2>Ooops, something went wrong...</h2>
  }

  return (
    <Wrapper
      onMouseEnter={() => stopMouseHover && setPause()} 
      onMouseLeave={() => stopMouseHover && setContinue()}
    >
      <h2>{currentSlideIndex + 1} from {slides.length}</h2>
      <ImgContainer src={slides[currentSlideIndex]?.url}/>
      <Subscription>{slides[currentSlideIndex]?.title}</Subscription>
      <Navigation
        state={state}
        setState={setState}
        nextSlide={nextSlide}
        prevSlide={prevSlide}
      />
    </Wrapper>
  )
}

export default Slider;