import React from 'react'
import { Button, PaginationContainer } from './style'
import { nextSlide, prevSlide } from '@src/reducers/mainSlice'
import { useDispatch } from 'react-redux'

const Pagination = () => {
const dispatch = useDispatch();

  return (
    <PaginationContainer>
      <Button onClick={() => dispatch(prevSlide())}>{'<'}</Button>
      <Button onClick={() => dispatch(nextSlide())}>{'>'}</Button>
    </PaginationContainer>
  )
}

export default Pagination