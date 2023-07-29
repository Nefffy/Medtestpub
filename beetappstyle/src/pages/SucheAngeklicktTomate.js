import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Component11Icon from "../components/Component11Icon";

const TomateFotor202306251639391Icon = styled.img`
  position: absolute;
  height: 62.24%;
  width: 99.34%;
  top: 37.76%;
  right: 0.66%;
  bottom: 0%;
  left: 0%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  object-fit: cover;
`;
const Tomate = styled.div`
  position: absolute;
  height: 37.76%;
  width: 100%;
  top: 0%;
  left: 0%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const TomateFotor202306251639391Parent = styled.div`
  position: absolute;
  top: 54px;
  left: 111px;
  width: 151px;
  height: 241px;
`;
const DieTomateIst = styled.p`
  margin: 0;
`;
const DieTomateIstContainer1 = styled.span`
  line-break: anywhere;
  width: 100%;
`;
const DieTomateIstContainer = styled.div`
  position: absolute;
  top: 357px;
  left: 4px;
  font-size: var(--font-size-xl);
  text-align: left;
  display: flex;
  align-items: center;
  width: 353px;
  height: 256px;
`;
const SucheAngeklicktTomateRoot = styled.div`
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
const SucheAngeklicktTomate = () => {
  const navigate = useNavigate();

  const onComponent13Click = useCallback(() => {
    navigate("/suche-angeklickt");
  }, [navigate]);

  return (
    <SucheAngeklicktTomateRoot>
      <TomateFotor202306251639391Parent>
        <TomateFotor202306251639391Icon
          alt=""
          src="/tomatefotor20230625163939-1@2x.png"
        />
        <Tomate>{`Tomate                    `}</Tomate>
      </TomateFotor202306251639391Parent>
      <DieTomateIstContainer>
        <DieTomateIstContainer1>
          <DieTomateIst>{`Die Tomate ist eine Frucht, `}</DieTomateIst>
          <DieTomateIst>der Nachtschattengewächse.</DieTomateIst>
          <DieTomateIst>&nbsp;</DieTomateIst>
          <DieTomateIst>
            <b>Gute Beetpartner:</b>
          </DieTomateIst>
          <DieTomateIst>Karotten, Petersilie, Basilikum</DieTomateIst>
          <DieTomateIst>
            <b>Schlechte Beetpartner:</b>
          </DieTomateIst>
          <DieTomateIst>Kartoffeln, Erbsen, Gurken</DieTomateIst>
          <DieTomateIst>&nbsp;</DieTomateIst>
          <DieTomateIst>&nbsp;</DieTomateIst>
          <DieTomateIst>
            <b>Bevorzugter Standort:</b>
          </DieTomateIst>
          <DieTomateIst>Sonnig und warm</DieTomateIst>
          <DieTomateIst>vor Frost und Regen schützen</DieTomateIst>
          <DieTomateIst>
            <b>{`Bevorzugter Boden: `}</b>
          </DieTomateIst>
          <DieTomateIst>humoser Boden, reich an Nährstoffen</DieTomateIst>
        </DieTomateIstContainer1>
      </DieTomateIstContainer>
      <Component11Icon
        component11IconPosition="absolute"
        component11IconTop="40px"
        component11IconLeft="10px"
        component11IconCursor="pointer"
        onComponent11Click={onComponent13Click}
      />
    </SucheAngeklicktTomateRoot>
  );
};

export default SucheAngeklicktTomate;
