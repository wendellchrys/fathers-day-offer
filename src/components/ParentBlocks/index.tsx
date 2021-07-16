import * as S from "./styled";

import imageBlock1 from "../../assets/images/image-block1.png";
import imageBlock2 from "../../assets/images/image-block2.png";

export function ParentBlocks() {
  return (
    <S.Background>
      <S.Container>
        <S.ImageBlock src={imageBlock1} />
        <S.ContainerBlock>
          <S.TextBlock>
            Apesar de precisarmos de disciplina durante a nossa formação, é
            muito bom quando conseguimos enxergar o nosso pai como um grande
            amigo. Quando ele respeita a sua individualidade e fica na torcida
            pelo seu sucesso, pode ser o melhor parceiro de risadas e conversas
            sobre o futuro. Alguém que conhece você melhor do que ninguém e quer
            a sua felicidade acima de todas as coisas.
            <br />
            <span>- Autor Desconhecido</span>
          </S.TextBlock>
        </S.ContainerBlock>
      </S.Container>

      <S.Container>
        <S.ContainerBlock>
          <S.TextBlock>
            Nem sempre paramos para pensar no papel que nossos pais ocupam em
            nossas vidas. Vivemos tão preocupados com as nossas obrigações que
            raramente agradecemos a quem nos deu tudo. Vamos mudar isso? O Dia
            dos Pais é a ocasião perfeita para presentear e demonstrar todo esse
            carinho, amor e gratidão!
          </S.TextBlock>
        </S.ContainerBlock>
        <S.ImageBlock src={imageBlock2} />
      </S.Container>
    </S.Background>
  );
}
