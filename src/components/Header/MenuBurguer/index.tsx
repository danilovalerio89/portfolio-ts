import * as S from "./styles";
import { useIsOpen } from "../../../providers/isOpen";

function MenuBurguer() {
  const { isOpen, setIsOpen } = useIsOpen();

  const handleChecked = () => {
    setIsOpen(!isOpen);
  };

  return (
    <S.LabelBox>
      <S.InputBurguer onChange={() => handleChecked()} />
      <S.SpanTop check={isOpen} />
      <S.SpanMiddle check={isOpen} />
      <S.SpanBottom check={isOpen} />
    </S.LabelBox>
  );
}

export default MenuBurguer;
