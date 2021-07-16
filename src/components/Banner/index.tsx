import * as S from "./styled";

import textBanner from "../../assets/images/text-banner.png";

export function Banner() {
  return (
    <S.Background>
      <S.Container>
        <S.TextBanner src={textBanner} />
      </S.Container>
    </S.Background>
  );
}
