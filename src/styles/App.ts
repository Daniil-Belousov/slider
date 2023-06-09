import styled from 'styled-components';
import { background } from '../images/index';

export const Title = styled.h1`
  font-size: 2rem;
  color: #333;
  position: absolute;
  bottom: 0;
  right: 3%;
`;

export const Background = styled.div`
  background: center / cover no-repeat url(${background});
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  vertical-align: middle;
  align-items: center;
  position: relative;
`

export const SettingsButton = styled.button`
  position: absolute;
  top: 10px;
  right: 30px;
  border: none;
  padding: 10px 20px;
  background: transparent;
  cursor: pointer;
  transition: 1s;
  font-size: 20px;

  &:hover {
    scale: 1.2;
  }
`