import styled from "styled-components";
import { themes } from "../../styles/themes";

export const ContainerButtonVariation = styled.button`
  background-color: ${themes.SecondaryColor};
  border-radius: 5px;
  color: ${themes.PrimaryColor};
  width: 66px;
  height: 60px;
  cursor: pointer;
  border: none;
  font-family: "Ubuntu Mono";
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  line-height: 25px;
`;

export const ContainerButtonStart = styled.button`
  height: 85px;
  width: 85px;
  border: none;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 44px 40px 13px 49px;
  cursor: pointer;
  :hover {
    background-color: #dbebd6;
  }
  div {
    width: 0;
    height: 0;
    margin-left: 10px;
    border-top: 20px solid transparent;
    border-bottom: 20px solid transparent;
    border-left: 30px solid;
    color: #162611;
  }
`;

export const ContainerButtonStop = styled.button`
  height: 85px;
  width: 85px;
  border: none;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 44px 40px 13px 49px;
  cursor: pointer;
  div {
    width: 30px;
    height: 30px;
    border-radius: 5px;
    background-color: #c01616;
  }
`;

export const ButtonFastAndSlow = styled.button`
  background-color: transparent;
  border-radius: 5px;
  border: 1px solid ${themes.SecondaryColor};
  cursor: pointer;
  width: 60px;
  height: 64px;
  font-family: "Ubuntu Mono";
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 30px;
  color: ${themes.SecondaryColor};
`;
