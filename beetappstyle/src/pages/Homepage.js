import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Planzenlexikon from "../components/Planzenlexikon";
import styled from "styled-components";
import Navbar from "../components/Navbar";

const LowerBar1 = styled.img`
  position: absolute;
  top: 962px;
  left: 0px;
  width: 360px;
  height: 100px;
`;
const Willkommen = styled.div`
  position: absolute;
  height: 9.5%;
  width: 70.28%;
  top: 7%;
  left: 14.72%;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const HomepageRoot = styled.div`
  position: relative;
  background-color: var(--color-palegoldenrod);
  width: 100%;
  height: 800px;
  overflow: hidden;
  text-align: center;
  font-size: var(--font-size-21xl);
  color: var(--color-black);
  font-family: var(--font-inter);
`;
const Homepage = () => {
  const navigate = useNavigate();

  const onComponent1ContainerClick = useCallback(() => {
    navigate("/beet");
  }, [navigate]);

  return (
    <HomepageRoot>
           <Planzenlexikon />
      <LowerBar1 alt="" src="/lower-bar-1.svg" />
      <Willkommen>Willkommen!</Willkommen>
      <Navbar />
    </HomepageRoot>
  );
};

export default Homepage;
