import React, { useEffect, useState } from 'react'
import { Title, Background, SettingsButton } from './styles/App';
import Slider from '@components/Slider'
import { useDispatch } from 'react-redux';
import { fetchSlides } from '@reducers/mainSlice';
import { AnyAction } from '@reduxjs/toolkit';
import SettingsModal from '@components/SettingsModal';

function App() {
  const [isOpenModal, setOpenModal] = useState(false)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSlides() as unknown as AnyAction)
  }, [dispatch]);

  return (
    <Background>
      <SettingsButton onClick={() => setOpenModal(true)}>Settings</SettingsButton>
      <Slider />
      <Title>Belousovsky Slider</Title>
      {isOpenModal &&
        <SettingsModal setOpenModal={setOpenModal}/>
      }
    </Background>
  );
}

export default App;

