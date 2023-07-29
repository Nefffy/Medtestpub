import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
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
  display: none;
`;
const ErstelleHierDeinen = styled.div`
  position: absolute;
  height: 10.86%;
  width: 84.64%;
  top: 27.6%;
  left: 7.52%;
  display: inline-block;
`;
const Component3 = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: var(--br-3xs);
  background-color: var(--color-wheat);
  border: 1px solid var(--color-black);
  box-sizing: border-box;
  width: 320px;
  height: 220px;
  cursor: pointer;
`;
const SearchSmIcon = styled.img`
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
const Component5Root = styled.div`
  position: absolute;
  top: 422px;
  left: 20px;
  width: 320px;
  height: 220px;
  cursor: pointer;
  text-align: center;
  font-size: var(--font-size-xl);
  color: var(--color-black);
  font-family: var(--font-inter);
`;
const Planzenlexikon = () => {
  const navigate = useNavigate();

  const onComponent5ContainerClick = useCallback(() => {
    // Please sync "Suche" to the project
  }, []);

  const onComponent3ContainerClick = useCallback(() => {
    navigate("/suche-angeklickt");
  }, [navigate]);

  return (
    <Component5Root onClick={onComponent5ContainerClick}>
      <Component3 onClick={onComponent3ContainerClick}>
        <PlusSquareIcon alt="" src="/plussquare.svg" />
        <ErstelleHierDeinen>Pflanzenlexikon</ErstelleHierDeinen>
      </Component3>
      <SearchSmIcon alt="" src="/searchsm2.svg" />
    </Component5Root>
  );
};

export default Planzenlexikon;
