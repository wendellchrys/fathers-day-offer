import styled from "styled-components";

export const Background = styled.div`
  margin-inline: auto;
  text-align: center;
  width: 100%;
  height: 190px;
  background: #00bddf;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (max-width: 1179px) {
    height: auto;
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

export const Title = styled.h1`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  text-align: center;
  color: #353535;
  padding-bottom: 15px;

  @media (max-width: 1179px) {
    font-size: 18px;
    padding: 15px;
  }
`;

export const ContainerInput = styled.form`
  margin-inline: auto;
  text-align: center;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 15px 50px;

  @media (max-width: 1179px) {
    flex-direction: column;
    padding: 15px 15px;
  }
`;

export const InputNewsletter = styled.input`
  font-family: Roboto;
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  text-align: center;
  color: #8b8b8b;
  width: 70%;
  max-width: 500px;
  height: 45px;
  background: #fdfdfd;
  border-radius: 5px;
  border: none;

  &:focus {
    outline: none;
  }

  @media (max-width: 1179px) {
    width: 100%;
    font-size: 15px;
  }
`;

export const ButtonNewsletter = styled.button`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 25px;
  text-align: center;
  color: #ffffff;
  width: 30%;
  max-width: 500px;
  height: 45px;
  background: #192551;
  border-radius: 5px;
  border: none;
  cursor: pointer;

  &:hover {
    filter: brightness(0.8);
  }

  @media (max-width: 1179px) {
    width: 100%;
    font-size: 18px;
  }
`;

export const ErrorSubmit = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  text-align: center;
  background: #f00000;
  color: #ffffff;
  padding: 0 15px;

  @media (max-width: 1179px) {
    font-size: 14px;
  }
`;

export const SucessSubmit = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  text-align: center;
  background: #3cb371;
  color: #ffffff;
  padding: 0 15px;

  @media (max-width: 1179px) {
    font-size: 14px;
  }
`;
