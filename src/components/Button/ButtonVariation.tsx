import * as S from "./styles";
interface ButtonProps {
  children: string;
}

const ButtonVariation = ({ children }: ButtonProps) => {
  return <S.ContainerButtonVariation>{children}</S.ContainerButtonVariation>;
};

export default ButtonVariation;
