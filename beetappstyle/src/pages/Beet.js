import styled from "styled-components";
import Aleft from "../components/Aleft";
import Planzeadd from "../components/Planzeadd";

const BeetChild = styled.img`
  position: absolute;
  top: 158px;
  left: 24px;
  width: 312px;
  height: 480px;
`;
const BeetItem = styled.img`
  position: absolute;
  top: 158px;
  left: 24px;
  width: 312px;
  height: 22px;
`;
const Vector1Stroke = styled.img`
  position: absolute;
  top: 158px;
  left: 45.5px;
  width: 1px;
  height: 22px;
`;
const BeetInner = styled.img`
  position: absolute;
  top: 180px;
  left: 24px;
  width: 22px;
  height: 458px;
`;
const Vector2Stroke = styled.img`
  position: absolute;
  top: 179.5px;
  left: 24px;
  width: 311.5px;
  height: 458px;
`;
const BCmIcon = styled.img`
  position: absolute;
  top: 162.43px;
  left: 26.81px;
  width: 17.27px;
  height: 5.45px;
`;
const HCmIcon = styled.img`
  position: absolute;
  top: 172.43px;
  left: 26.54px;
  width: 17.8px;
  height: 5.45px;
`;
const GroupIcon = styled.img`
  position: absolute;
  top: 713px;
  left: 20px;
  width: 320px;
  height: 75px;
`;
const BeetRoot = styled.div`
  position: relative;
  background-color: var(--color-palegoldenrod);
  width: 100%;
  height: 800px;
  overflow: hidden;
`;
const Beet = () => {
  return (
    <BeetRoot>
      <BeetChild alt="" src="/rectangle-14.svg" />
      <BeetItem alt="" src="/rectangle-15.svg" />
      <Vector1Stroke alt="" src="/vector-1-stroke.svg" />
      <BeetInner alt="" src="/rectangle-16.svg" />
      <Vector2Stroke alt="" src="/vector-2-stroke.svg" />
      <BCmIcon alt="" src="/b-cm.svg" />
      <HCmIcon alt="" src="/h-cm.svg" />
      <Aleft arrowLeft="/arrowleft.svg" />
      <GroupIcon alt="" src="/group-20.svg" />
      <Planzeadd />
    </BeetRoot>
  );
};

export default Beet;
