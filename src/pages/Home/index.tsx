import * as S from "./styles";
import Header from "../../components/Header";
import Layout from "../../components/Layout";
import ButtonVariation from "../../components/Button/ButtonVariation";
import { useState } from "react";
import Modal from "../../components/Modal";
import ButtonStart from "../../components/Button/ButtonStart";
import ButtonStop from "../../components/Button/ButtonStop";
import ButtonFast from "../../components/Button/ButtonFast";
import ButtonSlow from "../../components/Button/ButtonSlow";
export default function Home() {
  const [modal, setModal] = useState(false);
  const [buttonBoolean, setButtonBoolean] = useState(true);
  const handleClickButton = () => {
    setButtonBoolean(!buttonBoolean);
  };
  return (
    <S.Container>
      <Layout>
        <Header />
        <S.Variation>VARIAÇÕES</S.Variation>
        <S.DivButton>
          <ButtonVariation>I</ButtonVariation>
          <ButtonVariation>II</ButtonVariation>
          <ButtonVariation>III</ButtonVariation>
          <ButtonVariation>IV</ButtonVariation>
        </S.DivButton>
        <S.DivSection1>
          <span>ESTILO</span>
          <span>SELEÇÃO</span>
          {modal && <Modal>Meu modal</Modal>}
        </S.DivSection1>
        <S.DivSection2>
          <button style={{ borderRight: "1px solid #2E062A" }}>POP</button>
          <button>POP1</button>
        </S.DivSection2>
        <S.DivPlayer>
          {buttonBoolean ? (
            <ButtonStart onClick={handleClickButton} />
          ) : (
            <ButtonStop onClick={handleClickButton} />
          )}
          <S.ItemPlayer>
            <S.ContainerItem>VELOCIDADE</S.ContainerItem>
            <S.ContainerSlowAndFast>
              <ButtonFast />
              <ButtonSlow />
            </S.ContainerSlowAndFast>
          </S.ItemPlayer>
        </S.DivPlayer>
      </Layout>
    </S.Container>
  );
}
