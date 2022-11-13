import styled from "styled-components";

export const Container = styled.div`
  width: 428px;
  height: 100%;
  display: flex;

  flex-direction: column;
  @media (max-width: 428px) {
    width: 100%;
  }
`;
