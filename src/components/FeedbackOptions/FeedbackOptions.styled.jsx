import styled from 'styled-components';

export const ButtonList = styled.ul`
  list-style-type: none;
  justify-content: space-around;
  padding-left: 0;
  display: flex;
  gap: 24px;
`;

export const Btn = styled.button`
  background-color: #ffffff;
  color: #000000;
  padding: 8px 24px;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: yellow;
    transition: background-color 0.5s ease-in-out;
    color: black;
  }
  &:active {
    background-color: gray;
    color: white;
    transition: background-color 0.1s ease-in-out;
  }
`;
