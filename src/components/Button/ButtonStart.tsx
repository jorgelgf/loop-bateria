import * as S from "./styles";
interface ButtonStarprops {
  onClick?: () => void;
}
const ButtonStart = ({ onClick }: ButtonStarprops) => {
  return (
    <S.ContainerButtonStart onClick={onClick}>
      <div></div>
    </S.ContainerButtonStart>
  );
};

export default ButtonStart;
