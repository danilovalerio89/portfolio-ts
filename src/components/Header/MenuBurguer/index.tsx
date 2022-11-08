import { useIsOpen } from "../../../providers/isOpen";
import * as S from "./styles";

function MenuBurguer() {
  const { isOpen, setIsOpen } = useIsOpen();

  const handleChecked = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <S.LabelBox>
        <S.InputBurguer onChange={() => handleChecked()} />
        <S.SpanTop check={isOpen} />
        <S.SpanMiddle check={isOpen} />
        <S.SpanBottom check={isOpen} />
      </S.LabelBox>
    </>
  );
}

export default MenuBurguer;
