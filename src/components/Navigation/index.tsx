import React, { useState } from 'react'
import { Button, NavContainer, PagContainer } from './style'
import { OptionButton, OptionInput } from '../SettingsModal/style'
import { StateI } from '@src/types'

interface PropsI {
  state: StateI,
  setState: (state: StateI) => void,
  nextSlide: () => void,
  prevSlide: () => void
}

const Navigation = ({state, setState, nextSlide, prevSlide}: PropsI) => {
  const {currentSlideIndex, slides, settings: { navigation, pagination, loop}} = state;
  const [pagValue, setPagValue] = useState(1);
  const disabledFollowBtn = pagValue > slides.length || !pagValue || pagValue === currentSlideIndex + 1;
  
  const setSlide = () => {
    setState({...state, currentSlideIndex: pagValue - 1})
  }

  return (
    <NavContainer>
      {navigation && 
        <>
          <Button 
            onClick={() => prevSlide()}
            disabled={!loop && currentSlideIndex === 0}
          >{'<'}</Button>
          <Button 
            onClick={() => nextSlide()}
            disabled={!loop && currentSlideIndex === slides.length - 1}
          >{'>'}</Button>
        </>
      }
      {pagination &&
        <PagContainer>
          <OptionInput
            type='number'
            value={pagValue}
            min={1}
            max={slides.length}
            onChange={(e) => setPagValue(Number(e.target.value))}
          />
          <OptionButton 
            onClick={() => setSlide()} 
            disabled={disabledFollowBtn}
            option={!disabledFollowBtn}
          >Follow</OptionButton>
        </PagContainer>
      }
    </NavContainer>
  )
}

export default Navigation