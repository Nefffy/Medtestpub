import { useCallback } from "react";
import styled from "styled-components";
import Component11Icon from "../components/Component11Icon";

const Span = styled.span`
  font-size: var(--font-size-xl);
`;
const ZucchiniTxt = styled.span`
  line-break: anywhere;
  width: 100%;
`;
const Zucchini = styled.div`
  position: absolute;
  height: 11.38%;
  width: 52.5%;
  top: 7.38%;
  left: 23.89%;
  display: flex;
  align-items: center;
`;
const DieZucchiniIst = styled.p`
  margin: 0;
`;
const DieZucchiniIstContainer = styled.div`
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
const GurkeFotor202306251648541Icon = styled.img`
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
const SucheAngeklicktZucchiniRoot = styled.div`
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
const SucheAngeklicktZucchini = () => {
  const onComponent14Click = useCallback(() => {
    // Please sync "Suche" to the project
  }, []);

  return (
    <SucheAngeklicktZucchiniRoot>
      <Zucchini>
        <ZucchiniTxt>
          <span>Zucchini</span>
          <Span>{`                    `}</Span>
        </ZucchiniTxt>
      </Zucchini>
      <DieZucchiniIstContainer>
        <ZucchiniTxt>
          <DieZucchiniIst>{`Die Zucchini ist eine Frucht, `}</DieZucchiniIst>
          <DieZucchiniIst>
            der Kürbisgewächse. Die Früchte werden als Gemüse und Gewürz
            verwendet.
          </DieZucchiniIst>
          <DieZucchiniIst>&nbsp;</DieZucchiniIst>
          <DieZucchiniIst>
            <b>Gute Beetpartner:</b>
          </DieZucchiniIst>
          <DieZucchiniIst>Dill, Basilikum, Erbsen, Salate</DieZucchiniIst>
          <DieZucchiniIst>
            <b>Schlechte Beetpartner:</b>
          </DieZucchiniIst>
          <DieZucchiniIst>Paprika, Kartoffeln, Kürbis, Gurken</DieZucchiniIst>
          <DieZucchiniIst>&nbsp;</DieZucchiniIst>
          <DieZucchiniIst>
            <b>Bevorzugter Standort:</b>
          </DieZucchiniIst>
          <DieZucchiniIst>{`Sonnig bis halbschatten `}</DieZucchiniIst>
          <DieZucchiniIst>vor Frost schützen</DieZucchiniIst>
          <DieZucchiniIst>
            <b>{`Bevorzugter Boden: `}</b>
          </DieZucchiniIst>
          <DieZucchiniIst>humoser Boden, reich an Nährstoffen</DieZucchiniIst>
        </ZucchiniTxt>
      </DieZucchiniIstContainer>
      <GurkeFotor202306251648541Icon
        alt=""
        src="/gurkefotor20230625164854-1@2x.png"
      />
      <Component11Icon
        component11IconPosition="absolute"
        component11IconTop="40px"
        component11IconLeft="10px"
        component11IconCursor="pointer"
        onComponent11Click={onComponent14Click}
      />
    </SucheAngeklicktZucchiniRoot>
  );
};

export default SucheAngeklicktZucchini;
