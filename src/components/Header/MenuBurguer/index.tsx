import { useIsOpen } from "../../../providers/isOpen";
import {
  InputBurguer,
  LabelBox,
  SpanBottom,
  SpanMiddle,
  SpanTop,
} from "./style";

function MenuBurguer() {
  const { isOpen, setIsOpen } = useIsOpen();

  const handleChecked = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <LabelBox>
        <InputBurguer onChange={() => handleChecked()} />
        <SpanTop check={isOpen} />
        <SpanMiddle check={isOpen} />
        <SpanBottom check={isOpen} />
      </LabelBox>
    </>
  );
}

export default MenuBurguer;
