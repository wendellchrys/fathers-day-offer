import styled from "styled-components";

import background from "../../assets/images/background.jpg";

export const Background = styled.div`
  background-image: url(${background});
  background-repeat: no-repeat;
  background-position: center center;
  margin-inline: auto;
  text-align: center;
  width: 100%;
  height: auto;
  min-height: 450px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    background-image: none;
    background: #73dcf1;
    min-height: 350px;
  }
  @media (max-width: 576px) {
    min-height: 300px;
  }
`;

export const Container = styled.div`
  margin-inline: auto;
  text-align: center;
  width: 1180px;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (max-width: 1179px) {
    width: 100%;
  }
`;

export const TextBanner = styled.img`
  text-align: center;
  width: 100%;
  max-width: 603px;
  height: auto;
`;
