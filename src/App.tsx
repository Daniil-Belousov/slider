import React, { useEffect, useState } from 'react'
import { Background, SettingsButton } from './styles/App';
import Slider from '@components/Slider'
import SettingsModal from '@components/SettingsModal';
import { StateI } from './types';

function App() {
  const [isOpenModal, setOpenModal] = useState(false);

  const initialState: StateI = {
    currentSlideIndex: 0,
    slides: [],
    isLoading: false,
    error: false,
    pause: false,
    settings: {
      navigation: true,
      pagination: true,
      loop: true,
      auto: true,
      delay: 1,
      stopMouseHover: false,
    }
  }

  const [state, setState] = useState(initialState)

  async function fetchSlides() {
    setState({...state, isLoading: true})
    try {
      const response = await fetch ('https://jsonplaceholder.typicode.com/photos?_limit=10');
      const data = await response.json();
      setState({...state, slides: data, isLoading: false})
    } catch (e) {
      setState({...state, error: true, isLoading: false})
    }
  }
      
  useEffect(() => {
    fetchSlides();
  }, []);

  return (
    <Background>
      <SettingsButton onClick={() => setOpenModal(true)}>Settings</SettingsButton>
      <Slider 
        state={state}
        setState={setState}
        isOpenModal={isOpenModal}
      />
      {isOpenModal &&
        <SettingsModal 
          setOpenModal={setOpenModal}
          state={state}
          setState={setState}
        />
      }
    </Background>
  );
}

export default App;

