import { Property } from "csstype";
import styled from "styled-components";

const PlusSquareIcon = styled.img`
  position: absolute;
  height: 17.19%;
  width: 11.91%;
  top: 49.77%;
  right: 44.2%;
  bottom: 33.03%;
  left: 43.89%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const ErstelleHierDeinen = styled.div`
  position: absolute;
  height: 10.86%;
  width: 84.64%;
  top: 27.6%;
  left: 7.52%;
  display: inline-block;
  text-align: ${(p) => p.propTextAlign};
`;
const Component1Root = styled.div`position: absolute;
  height: 27.5%;
  width: 88.89%;
  top: 19.75%;
  right: 5.56%;
  bottom: 52.75%;
  left: 5.56%;
  border-radius: var(--br-3xs);
  background-color: var(--color-wheat);
  border: 1px solid var(--color-black);
  box-sizing: border-box;
  cursor: pointer;
  text-align: left;
  font-size: var(--font-size-xl);
  color: var(--color-black);
  font-family: var(--font-inter);
  height: ${(p) => p.plusSquareIconHeight}
  width: ${(p) => p.plusSquareIconWidth}
  top: ${(p) => p.plusSquareIconTop}
  right: ${(p) => p.plusSquareIconRight}
  bottom: ${(p) => p.plusSquareIconBottom}
  left: ${(p) => p.plusSquareIconLeft}
`;
const Beetplanerstell = ({
  planCreatorText,
  showPlusSquareIcon,
  plusSquareIconHeight,
  plusSquareIconWidth,
  plusSquareIconTop,
  plusSquareIconRight,
  plusSquareIconBottom,
  plusSquareIconLeft,
  propTextAlign,
  onComponent1ContainerClick,
}) => {
  return (
    <Component1Root
      onClick={onComponent1ContainerClick}
      plusSquareIconHeight={plusSquareIconHeight}
      plusSquareIconWidth={plusSquareIconWidth}
      plusSquareIconTop={plusSquareIconTop}
      plusSquareIconRight={plusSquareIconRight}
      plusSquareIconBottom={plusSquareIconBottom}
      plusSquareIconLeft={plusSquareIconLeft}
    >
      {showPlusSquareIcon && <PlusSquareIcon alt="" src="/plussquare.svg" />}
      <ErstelleHierDeinen propTextAlign={propTextAlign}>
        {planCreatorText}
      </ErstelleHierDeinen>
    </Component1Root>
  );
};

export default Beetplanerstell;
