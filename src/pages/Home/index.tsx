import { useEffect, useState } from "react";
import Modal from "../../components/Modal";
import ReactAudioPlayer from "react-audio-player";
import { Audios } from "../../audios";
import ButtonVariation from "../../components/Button/ButtonVariation";
import Header from "../../components/Header";
import * as S from "./styles";
import Layout from "../../components/Layout";
import { themes } from "../../styles/themes";

export default function Home() {
  const [modal, setModal] = useState(false);
  const [firstMusic, setFirstMusic] = useState(true);

  const [play, setPlay] = useState("");
  const [aud, setAud] = useState("");

  useEffect(() => {
    setPlay(Audios.pop1);
    setAud(Audios.pop1);
  }, []);

  const handleClickI = () => {
    setAud(Audios.pop1);
  };

  const handleClickII = () => {
    setAud(Audios.pop2);
  };
  const handleMusic = () => {
    setPlay(aud);
  };
  return (
    <S.Container>
      <Layout>
        <Header />
        <S.DivButton>
          <ButtonVariation
            style={{ backgroundColor: `${themes.bgButtonI}` }}
            onClick={handleClickI}
          >
            I
          </ButtonVariation>
          <ButtonVariation
            style={{ backgroundColor: `${themes.bgButtonII}` }}
            onClick={handleClickII}
          >
            II
          </ButtonVariation>
          <ButtonVariation style={{ backgroundColor: `${themes.bgButtonIII}` }}>
            III
          </ButtonVariation>
          <ButtonVariation style={{ backgroundColor: `${themes.bgButtonIV}` }}>
            IV
          </ButtonVariation>
        </S.DivButton>

        <S.DivPlayer>
          <ReactAudioPlayer
            onCanPlayThrough={handleMusic}
            listenInterval={0}
            src={play}
            autoPlay
            controls
            loop={true}
          />
        </S.DivPlayer>
        <S.DivSection1>
          <span>ESTILO</span>
          <span>SELEÇÃO</span>
          {modal && <Modal>Meu modal</Modal>}
        </S.DivSection1>
        <S.DivSection2>
          <button style={{ borderRight: "1px solid #2E062A" }}>POP</button>
          <button>POP1</button>
        </S.DivSection2>
      </Layout>
    </S.Container>
  );
}
