import styled from "styled-components";

export const NavContainer = styled.div`
  width: 100%;
  padding: 20px 30px;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-evenly;
  align-items: center;
`;

export const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: black;
  font-size: 30px;
  transition: 1s;
  
  &:hover {
    scale: 1.2;
  }

  &:disabled {
    opacity: 0.5;
  }
`;

export const PagContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 270px;
`;