import { useState } from "react";
import * as S from "./styled";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [errorSubmit, setErrorSubmit] = useState("");
  const [sucessSubmit, setSucessSubmit] = useState("");

  function verifyEmail(email: string) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  function handleSubmit(e: any) {
    e.preventDefault();
    if (email.length === 0) {
      setSucessSubmit("");
      setErrorSubmit("Você não digitou o email!");
    }
    if (email.length !== 0 && verifyEmail(email) === false) {
      setSucessSubmit("");
      setErrorSubmit("Você digitou um email inválido");
    }
    if (verifyEmail(email) === true) {
      localStorage.setItem("email", email);
      setErrorSubmit("");
      setSucessSubmit("Email cadastrado com sucesso!");
    }
  }

  return (
    <S.Background>
      <S.Container>
        <S.Title>Cadastre-se para receber nossas ofertas!</S.Title>
        <S.ContainerInput>
          <S.InputNewsletter
            placeholder="Insira seu melhor email"
            type="email"
            required
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <S.ButtonNewsletter type="submit" onClick={(e) => handleSubmit(e)}>
            Cadastrar
          </S.ButtonNewsletter>
        </S.ContainerInput>
        {verifyEmail(email) === false ? (
          <S.ErrorSubmit>{errorSubmit}</S.ErrorSubmit>
        ) : (
          <S.SucessSubmit>{sucessSubmit}</S.SucessSubmit>
        )}
      </S.Container>
    </S.Background>
  );
}
