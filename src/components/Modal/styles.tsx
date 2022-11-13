import styled from "styled-components";
import { themes } from "../../styles/themes";
export const Container = styled.div`
  position: relative;
  top: 60px;
  right: 100px;
  width: 200px;
  background-color: ${themes.SecondaryColor};
  color: ${themes.PrimaryColor};

  height: auto;
  padding: 10px;
  z-index: 2;
`;

export const Modal = styled.div`
  position: fixed;
  width: auto;
  min-height: 100vh;
  background-color: ${themes.PrimaryColor};
  border: solid white 1px;
  width: 100%;
  opacity: 0.5;
  top: 0;
  left: 0;
  z-index: 1;
`;
