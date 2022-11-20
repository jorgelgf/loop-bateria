import styled from "styled-components";
import { themes } from "../../styles/themes";

export const ContainerButtonVariation = styled.button`
  background-color: ${themes.SecondaryColor};
  color: ${themes.PrimaryColor};
  width: 93px;
  height: 139px;
  cursor: pointer;
  border: none;
  font-family: "Ubuntu Mono";
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  line-height: 25px;
  color: ${themes.SecondaryColor};
`;
