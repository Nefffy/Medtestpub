import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Component11Icon from "../components/Component11Icon";

const SearchSmIcon = styled.img`
  position: relative;
  width: 38px;
  height: 38px;
  overflow: hidden;
  flex-shrink: 0;
`;
const PflanzenSuchen = styled.div`
  position: relative;
`;
const SearchSmParent = styled.div`
  position: absolute;
  top: 88px;
  left: 41px;
  border-radius: var(--br-3xs);
  background-color: var(--color-wheat);
  border: 1px solid var(--color-black);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  padding: var(--padding-xs) 26px;
  align-items: center;
  justify-content: flex-start;
  gap: 32px;
`;
const TomateFotor202306251639391Icon = styled.img`
  position: absolute;
  height: 75%;
  width: 100%;
  top: 25%;
  right: 0%;
  bottom: 0%;
  left: 0%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  object-fit: cover;
  cursor: pointer;
`;
const Tomate = styled.div`
  position: absolute;
  top: 0%;
  left: 25.33%;
`;
const TomateFotor202306251639391Parent = styled.div`
  position: absolute;
  top: 0px;
  left: 2px;
  width: 150px;
  height: 200px;
`;
const Paprika = styled.div`
  position: absolute;
  top: 0%;
  left: 26.67%;
`;
const Paprikacrop1Parent = styled.div`
  position: absolute;
  top: 242px;
  left: 2px;
  width: 150px;
  height: 200px;
`;
const GurkeFotor202306251648541Icon = styled.img`
  position: absolute;
  height: 75%;
  width: 100%;
  top: 25%;
  right: 0%;
  bottom: 0%;
  left: 0%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  object-fit: cover;
`;
const Zucchini = styled.div`
  position: absolute;
  top: 0%;
  left: 22%;
  cursor: pointer;
`;
const GurkeFotor202306251648541Parent = styled.div`
  position: absolute;
  top: 484px;
  left: 0px;
  width: 150px;
  height: 200px;
`;
const PaprikaRot = styled.div`
  position: absolute;
  top: 0%;
  left: 15.33%;
`;
const PaprikaRotFotor202306251713Parent = styled.div`
  position: absolute;
  top: 998px;
  left: 0px;
  width: 150px;
  height: 200px;
`;
const Erdbeere = styled.div`
  position: absolute;
  top: 0%;
  left: 21.33%;
`;
const ErdbeereParent = styled.div`
  position: absolute;
  top: 736px;
  left: 0px;
  width: 150px;
  height: 200px;
`;
const FrameParent = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 152px;
  height: 1198px;
`;
const Saatzeit = styled.p`
  margin: 0;
`;
const SaatzeitJanSept = styled.div`
  position: absolute;
  top: 89px;
  left: 195px;
`;
const FrameWrapper = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 152px;
  height: 624px;
  overflow-y: auto;
`;
const SucheAngeklicktInner = styled.div`
  position: absolute;
  top: 176px;
  left: 32px;
  width: 299px;
  height: 624px;
`;
const SucheAngeklicktRoot = styled.div`
  position: relative;
  background-color: var(--color-palegoldenrod);
  width: 100%;
  height: 800px;
  overflow: hidden;
  text-align: center;
  font-size: var(--font-size-xl);
  color: var(--color-black);
  font-family: var(--font-inter);
`;
const SucheAngeklickt = () => {
  const navigate = useNavigate();

  const onComponent12Click = useCallback(() => {
    navigate("/beet");
  }, [navigate]);

  const onTomateFotor202306251639391ImageClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onPaprikacrop1ImageClick = useCallback(() => {
    navigate("/suche-angeklickt-paprika");
  }, [navigate]);

  const onZucchiniTextClick = useCallback(() => {
    navigate("/suche-angeklickt-zucchini");
  }, [navigate]);

  const onPaprikaRotFotor202306251713ImageClick = useCallback(() => {
    navigate("/suche-angeklickt-paprika-rot");
  }, [navigate]);

  return (
    <SucheAngeklicktRoot>
      <SearchSmParent>
        <SearchSmIcon alt="" src="/searchsm1.svg" />
        <PflanzenSuchen>Pflanzen suchen</PflanzenSuchen>
      </SearchSmParent>
      <SucheAngeklicktInner>
        <FrameWrapper>
          <FrameParent>
            <FrameParent>
              <TomateFotor202306251639391Parent>
                <TomateFotor202306251639391Icon
                  alt=""
                  src="/tomatefotor20230625163939-1@2x.png"
                  onClick={onTomateFotor202306251639391ImageClick}
                />
                <Tomate>{`Tomate                    `}</Tomate>
              </TomateFotor202306251639391Parent>
              <Paprikacrop1Parent>
                <TomateFotor202306251639391Icon
                  alt=""
                  src="/paprikacrop-1@2x.png"
                  onClick={onPaprikacrop1ImageClick}
                />
                <Paprika>Paprika</Paprika>
              </Paprikacrop1Parent>
              <GurkeFotor202306251648541Parent>
                <GurkeFotor202306251648541Icon
                  alt=""
                  src="/gurkefotor20230625164854-1@2x.png"
                />
                <Zucchini onClick={onZucchiniTextClick}>Zucchini</Zucchini>
              </GurkeFotor202306251648541Parent>
              <PaprikaRotFotor202306251713Parent>
                <TomateFotor202306251639391Icon
                  alt=""
                  src="/paprika-rotfotor2023062517133-1@2x.png"
                  onClick={onPaprikaRotFotor202306251713ImageClick}
                />
                <PaprikaRot>Paprika rot</PaprikaRot>
              </PaprikaRotFotor202306251713Parent>
              <ErdbeereParent>
                <Erdbeere>Erdbeere</Erdbeere>
                <GurkeFotor202306251648541Icon
                  alt=""
                  src="/erdbeerefotor202306251757-1@2x.png"
                />
              </ErdbeereParent>
            </FrameParent>
            <SaatzeitJanSept>
              <Saatzeit>Saatzeit:</Saatzeit>
              <Saatzeit> Jan.-Sept.</Saatzeit>
            </SaatzeitJanSept>
          </FrameParent>
        </FrameWrapper>
      </SucheAngeklicktInner>
      <Component11Icon
        component11IconPosition="absolute"
        component11IconTop="40px"
        component11IconLeft="10px"
        component11IconCursor="pointer"
        onComponent11Click={onComponent12Click}
      />
    </SucheAngeklicktRoot>
  );
};

export default SucheAngeklickt;
