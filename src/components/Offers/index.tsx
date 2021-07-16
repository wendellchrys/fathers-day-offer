import * as S from "./styled";

import offer1 from "../../assets/images/offer1.png";
import offer2 from "../../assets/images/offer2.png";
import offer3 from "../../assets/images/offer3.png";

export function Offers() {
  return (
    <S.Background>
      <S.Container>
        <S.Block>
          <S.Title>SMARTPHONES</S.Title>
          <S.Image src={offer1} />
        </S.Block>
        <S.Block>
          <S.Title>TECNOLOGIA</S.Title>
          <S.Image src={offer2} />
        </S.Block>
        <S.Block>
          <S.Title>FERRAMENTAS</S.Title>
          <S.Image src={offer3} />
        </S.Block>
      </S.Container>
    </S.Background>
  );
}
