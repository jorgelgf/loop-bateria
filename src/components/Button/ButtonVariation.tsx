import * as S from "./styles";
interface ButtonProps {
  children: string;
  onClick?: () => void;
  style: {};
}

const ButtonVariation = ({ children, onClick, style }: ButtonProps) => {
  return (
    <S.ContainerButtonVariation onClick={onClick} style={style}>
      {children}
    </S.ContainerButtonVariation>
  );
};

export default ButtonVariation;
