import styled from "styled-components";
import { themes } from "../../styles/themes";
export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${themes.PrimaryColor};
`;

export const Variation = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${themes.SecondaryColor};
  font-family: "Ubuntu Mono";
  font-style: normal;
  font-weight: 700;
  margin-top: 91px;
`;
export const DivButton = styled.div`
  margin-top: 11px;
  height: auto;
  width: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 49px;
  margin-left: 49px;
`;

export const DivSection1 = styled.div`
  width: auto;
  font-family: "Ubuntu Mono";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 14px;
  color: ${themes.SecondaryColor};
  margin: 46px 49px 13px 49px;
  display: flex;
  justify-content: space-between;
  span {
    height: auto;
    width: auto;
    ${themes.SecondaryColor}
  }
`;

export const DivPlayer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
`;

export const DivSection2 = styled.div`
  width: auto;
  font-family: "Ubuntu Mono";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 14px;
  background-color: ${themes.SecondaryColor};
  color: ${themes.PrimaryColor};
  display: flex;
  justify-content: space-between;
  margin: 0px 49px 0px 49px;

  button {
    width: 100%;
    height: 29px;
    border: solid red 1px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${themes.PrimaryColor};
    cursor: pointer;
    border: none;
    font-family: "Ubuntu Mono";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 14px;
  }
`;
