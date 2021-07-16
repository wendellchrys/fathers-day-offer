import React from "react";
import * as S from "./styled";

import logo from "../../assets/images/logo.png";

import { Banner } from "../../components/Banner";
import { Newsletter } from "../../components/Newsletter";
import { ParentBlocks } from "../../components/ParentBlocks";
import { Footer } from "../../components/Footer";
import { Offers } from "../../components/Offers";

function App() {
  return (
    <div>
      <S.Header>
        <S.Logo src={logo} />
      </S.Header>
      <Banner />
      <Newsletter />
      <Offers />
      <ParentBlocks />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
