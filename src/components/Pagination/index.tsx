import React, { useState } from 'react'
import { Button, NavContainer, PagContainer } from './style'
import { nextSlide, prevSlide, setSlide } from '@src/reducers/mainSlice'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@src/types'
import { OptionButton, OptionInput } from '../SettingsModal/style'

const Pagination = () => {
const dispatch = useDispatch();

const { navigation, pagination, loop } = useSelector((state: RootState) => state.main.settings);
const {slides, currentSlideIndex} = useSelector((state: RootState) => state.main);

const [pagValue, setPagValue] = useState(1);
const disabledFollowBtn = pagValue >= slides.length || !pagValue || pagValue === currentSlideIndex + 1;

  return (
    <NavContainer>
      {navigation && 
        <>
          <Button 
            onClick={() => dispatch(prevSlide())}
            disabled={!loop && currentSlideIndex === 0}
          >{'<'}</Button>
          <Button 
            onClick={() => dispatch(nextSlide())}
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
            onClick={() => dispatch(setSlide(pagValue - 1))} 
            disabled={disabledFollowBtn}
            option={!disabledFollowBtn}
          >Follow</OptionButton>
        </PagContainer>
      }
    </NavContainer>
  )
}

export default Pagination