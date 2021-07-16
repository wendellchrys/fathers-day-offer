import styled from "styled-components";

export const Background = styled.div`
  margin-inline: auto;
  text-align: center;
  width: 100%;
  height: auto;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 30px 0;
`;

export const Container = styled.div`
  margin-inline: auto;
  text-align: center;
  width: 1180px;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;

  &:first-child {
    margin-bottom: 40px;
  }

  @media (max-width: 1179px) {
    width: 100%;
    flex-direction: column;
  }
`;

export const ImageBlock = styled.img`
  width: auto;
  height: auto;
`;

export const ContainerBlock = styled.div`
  background: #f7f7f7;
  margin-inline: auto;
  text-align: center;
  width: 820px;
  height: 325px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1179px) {
    width: 100%;
    height: auto;
  }
`;

export const TextBlock = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 30px;
  text-align: center;
  color: #353535;
  padding: 20px;

  span {
    color: #ccc;
    font-size: 15px;
    padding-top: 20px;
  }
`;
