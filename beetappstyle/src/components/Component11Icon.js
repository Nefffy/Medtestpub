import { Property } from "csstype";
import styled from "styled-components";

const Component11IconRoot = styled.img`position: relative;
  width: 342px;
  height: 32px;
  cursor: pointer;
  position: ${(p) => p.component11IconPosition}
  top: ${(p) => p.component11IconTop}
  left: ${(p) => p.component11IconLeft}
  cursor: ${(p) => p.component11IconCursor}
`;
const Component11Icon = ({
  component11IconPosition,
  component11IconTop,
  component11IconLeft,
  component11IconCursor,
  onComponent11Click,
}) => {
  return (
    <Component11IconRoot
      alt=""
      src="/component-11.svg"
      onClick={onComponent11Click}
      component11IconPosition={component11IconPosition}
      component11IconTop={component11IconTop}
      component11IconLeft={component11IconLeft}
      component11IconCursor={component11IconCursor}
    />
  );
};

export default Component11Icon;
