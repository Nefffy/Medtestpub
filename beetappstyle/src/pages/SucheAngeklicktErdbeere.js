import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Component11Icon from "../components/Component11Icon";

const Span = styled.span`
  font-size: var(--font-size-xl);
`;
const ErdbeereTxt = styled.span`
  line-break: anywhere;
  width: 100%;
`;
const Erdbeere = styled.div`
  position: absolute;
  height: 11.38%;
  width: 52.5%;
  top: 7.38%;
  left: 23.89%;
  display: flex;
  align-items: center;
`;
const DieErdbeereIst = styled.p`
  margin: 0;
`;
const DieErdbeereIstContainer = styled.div`
  position: absolute;
  top: 268px;
  left: calc(50% - 177px);
  font-size: var(--font-size-xl);
  text-align: left;
  display: flex;
  align-items: center;
  width: 354px;
  height: 432px;
`;
const ErdbeereFotor2023062517571Icon = styled.img`
  position: absolute;
  height: 18.75%;
  width: 41.67%;
  top: 18.13%;
  right: 27.5%;
  bottom: 63.13%;
  left: 30.83%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  object-fit: cover;
`;
const SucheAngeklicktErdbeereRoot = styled.div`
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
const SucheAngeklicktErdbeere = () => {
  const navigate = useNavigate();

  const onComponent15Click = useCallback(() => {
    navigate("/suche-angeklickt");
  }, [navigate]);

  return (
    <SucheAngeklicktErdbeereRoot>
      <Erdbeere>
        <ErdbeereTxt>
          <span>Erdbeere</span>
          <Span>{`                    `}</Span>
        </ErdbeereTxt>
      </Erdbeere>
      <DieErdbeereIstContainer>
        <ErdbeereTxt>
          <DieErdbeereIst>{`Die Erdbeere ist eine Frucht, `}</DieErdbeereIst>
          <DieErdbeereIst>
            der Kürbisgewächse. Die Früchte werden als Gemüse und Gewürz
            verwendet.
          </DieErdbeereIst>
          <DieErdbeereIst>&nbsp;</DieErdbeereIst>
          <DieErdbeereIst>
            <b>Gute Beetpartner:</b>
          </DieErdbeereIst>
          <DieErdbeereIst>Knoblauch, Spargel, Salate</DieErdbeereIst>
          <DieErdbeereIst>
            <b>Schlechte Beetpartner:</b>
          </DieErdbeereIst>
          <DieErdbeereIst>Kohlarten, Kartoffeln, Puffbohnen</DieErdbeereIst>
          <DieErdbeereIst>&nbsp;</DieErdbeereIst>
          <DieErdbeereIst>
            <b>Bevorzugter Standort:</b>
          </DieErdbeereIst>
          <DieErdbeereIst>{`Vollsonnig, etwas windgeschützt `}</DieErdbeereIst>
          <DieErdbeereIst>&nbsp;</DieErdbeereIst>
          <DieErdbeereIst>
            <b>{`Bevorzugter Boden: `}</b>
          </DieErdbeereIst>
          <DieErdbeereIst>Nährstoffreicher Boden</DieErdbeereIst>
        </ErdbeereTxt>
      </DieErdbeereIstContainer>
      <ErdbeereFotor2023062517571Icon
        alt=""
        src="/erdbeerefotor202306251757-1@2x.png"
      />
      <Component11Icon
        component11IconPosition="absolute"
        component11IconTop="40px"
        component11IconLeft="10px"
        component11IconCursor="pointer"
        onComponent11Click={onComponent15Click}
      />
    </SucheAngeklicktErdbeereRoot>
  );
};

export default SucheAngeklicktErdbeere;
