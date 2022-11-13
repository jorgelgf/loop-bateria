import * as S from "./styles";

interface ButtonStopProps {
  onClick?: () => void;
}
const ButtonStop = ({ onClick }: ButtonStopProps) => {
  return (
    <S.ContainerButtonStop onClick={onClick}>
      <div></div>
    </S.ContainerButtonStop>
  );
};

export default ButtonStop;
