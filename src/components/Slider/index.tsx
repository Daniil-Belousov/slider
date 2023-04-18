import React from 'react';
import Pagination from '@components/Pagination';
import { Wrapper, ImgContainer} from './style';
import { RootState } from '@src/types';
import { useSelector } from 'react-redux';

const Slider = () => {
  const { currentSlideIndex, isLoading, error, slides } = useSelector((state: RootState) => state.main);

  if(isLoading) {
    return <h2>Loading, please wait...</h2>
  }

  if(error) {
    return <h2>Ooops, something went wrong...</h2>
  }

  return (
    <Wrapper>
      <h2>{currentSlideIndex + 1} из {slides.length}</h2>
      <ImgContainer src={slides[currentSlideIndex]?.url}/>
        <Pagination/>
    </Wrapper>
  )
}

export default Slider;