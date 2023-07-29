import { useCallback } from "react";
import styled from "styled-components";

const ComponentChild = styled.img`
  position: relative;
  border-radius: var(--br-3xs);
  width: 55px;
  height: 49px;
`;
const PflanzenHinzufgen = styled.div`
  position: relative;
`;
const FrameParentRoot = styled.div`
  position: absolute;
  top: 72px;
  left: 53px;
  border-radius: var(--br-3xs);
  background-color: var(--color-wheat);
  border: 1px solid var(--color-black);
  box-sizing: border-box;
  width: 257px;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  padding: var(--padding-xs) 0px;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  text-align: center;
  font-size: var(--font-size-xl);
  color: var(--color-black);
  font-family: var(--font-inter);
`;
const Planzeadd = () => {
  const onFrameContainerClick = useCallback(() => {
    // Please sync "Beet Hinzu 1" to the project
  }, []);

  return (
    <FrameParentRoot onClick={onFrameContainerClick}>
      <ComponentChild alt="" src="/frame-14.svg" />
      <PflanzenHinzufgen>Pflanzen hinzufügen</PflanzenHinzufgen>
    </FrameParentRoot>
  );
};

export default Planzeadd;
