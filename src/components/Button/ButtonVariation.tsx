import * as S from "./styles";
interface ButtonProps {
  children: string;
  onClick?: () => void;
}

const ButtonVariation = ({ children, onClick }: ButtonProps) => {
  return (
    <S.ContainerButtonVariation onClick={onClick}>
      {children}
    </S.ContainerButtonVariation>
  );
};

export default ButtonVariation;
