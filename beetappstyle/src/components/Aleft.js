import styled from "styled-components";

const ArrowLeftIconRoot = styled.img`
  position: absolute;
  height: 4%;
  width: 8.89%;
  top: 5%;
  right: 88.33%;
  bottom: 91%;
  left: 2.78%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const Aleft = ({ arrowLeft }) => {
  return <ArrowLeftIconRoot alt="" src={arrowLeft} />;
};

export default Aleft;
