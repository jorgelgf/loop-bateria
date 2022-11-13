import { ReactNode } from "react";
import * as S from "./styles";
interface ModalProps {
  children: ReactNode;
}
const Modal = ({ children }: ModalProps) => {
  return (
    <>
      <S.Container>teste</S.Container>
      <S.Modal></S.Modal>
    </>
  );
};

export default Modal;
