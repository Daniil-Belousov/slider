import styled from 'styled-components';

export const BackgroundModal = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  background: black;
  opacity: 0.7;
`

export const ModalWrapper = styled.div`
  position: fixed;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
  width: fit-content;
  height: fit-content;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const Modal = styled.div`
  min-width: 500px;
  max-height: 700px;
  width: 100%;
  height: 100%;
  padding: 20px;
  background-color: white;
  border: none;
  border-radius: 3%;

  display: flex;
  flex-direction: column;
`

export const ModalHeader = styled.div`
  width: 100%;

  h2 {
    font-size: 26px;
    color: black;
  }
`

export const ModalBody = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const OptionString = styled.div`
  width: calc(100% - 40px);
  display: flex;
  justify-content: space-between;
  padding: 20px ;
  align-items: center;
`

export const OptionName = styled.h3`
  font-size: 20px;
  color: black;
`

interface ButtonPropsI {
  option: boolean
}

export const OptionButton = styled.button<ButtonPropsI>`
  color: black;
  font-size: 16px;
  padding: 10px 30px;
  height: fit-content;
  border: none;
  border-radius: 5%;
  transition: 1s;
  width: 100px;
  cursor: pointer;

  background: ${({ option }) => option ? '#33a800' : '#ba0000'};

  &:disabled {
    opacity: 0.5;
  }
`

export const OptionInput = styled.input`
  width: 100px;
  padding: 10px 30px;
  height: fit-content;
  border: 2px solid black;
  border-radius: 5%;

  &:disabled {
    opacity: 0.5;
  }
`