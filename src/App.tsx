import React, { useEffect } from 'react'
import { Title, Background } from './styles/App';
import Slider from '@components/Slider'
import { useDispatch } from 'react-redux';
import { fetchSlides } from './reducers/mainSlice';
import { AnyAction } from '@reduxjs/toolkit';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSlides() as unknown as AnyAction)
  }, [dispatch]);

  return (
    <Background>
      <Slider />
      <Title>Belousovsky Slider</Title>
    </Background>
  );
}

export default App;

