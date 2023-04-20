import React, { useEffect, useState } from 'react'
import { BackgroundModal, ModalWrapper, Modal, ModalHeader, ModalBody, OptionButton, OptionString, OptionName, OptionInput } from './style'
import { useDispatch, useSelector } from 'react-redux'
import { RootState, SettingsI } from '@src/types';
import switchOptions from '@src/helpers/switchOptions'
import switchActions from '@src/helpers/switchActions';

interface PropsI {
  setOpenModal: (value: boolean) => void;
}

const SettingsModal = ({setOpenModal}: PropsI) => {
  const dispatch = useDispatch();
  const settings: SettingsI = useSelector((state: RootState) => state.main.settings);

  const settingsArr: {name: string, value: boolean}[] = Object.keys(settings).map(key => ({
    name: key,
    value: settings[key]
  }));

  const [delay, setDelay] = useState(settings.delay);

  const handleClose = () => {
    setOpenModal(false);
  }

  useEffect(() => {
    function handleKeydown(e: KeyboardEvent) {
      if(e.key === 'Escape') handleClose();
    }
    
    document.addEventListener('keydown', handleKeydown);
  
    return () => {
      document.removeEventListener('keydown', handleKeydown);
    };
  }, []);


  return (
    <>
      <BackgroundModal onClick={handleClose}/>
      <ModalWrapper>
        <Modal>
          <ModalHeader>
            <h2>Settings</h2>
          </ModalHeader>
          <ModalBody>
            {settingsArr.map(item => {
              return(
                item.name !== 'delay' ? (
                <OptionString key={Date.now()+item.name}>
                  <OptionName>{switchOptions(item.name)}:</OptionName>
                  <OptionButton onClick={() => dispatch(switchActions(item.name))} disabled={item.name === 'stopMouseHover' && !settings.auto} option={item.value}>{item.value ? 'ON' : 'OFF'}</OptionButton>
                </OptionString>
                ) : (
                  <OptionString key={item.name}>
                  <OptionName>{switchOptions(item.name)}:</OptionName>
                  <OptionInput 
                    type='number'
                    value={delay}
                    placeholder='5'
                    disabled={!settings.auto}
                    onChange={(e) => setDelay(Number(e.target.value))}/>
                  <OptionButton 
                    onClick={() => dispatch(switchActions(item.name, delay))} 
                    option={delay !== settings.delay} 
                    disabled={delay === settings.delay || !settings.auto}
                  >Save delay</OptionButton>
                </OptionString>
                )
              )
            })}
          </ModalBody>
        </Modal>
      </ModalWrapper>
    </>
  )
}

export default SettingsModal