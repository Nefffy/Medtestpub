import styled from "styled-components";
import Component11Icon from "../components/Component11Icon";

const Span = styled.span`
  font-size: var(--font-size-xl);
`;
const PaprikaTxt = styled.span`
  line-break: anywhere;
  width: 100%;
`;
const Paprika = styled.div`
  position: absolute;
  height: 11.38%;
  width: 41.94%;
  top: 6.75%;
  left: 30.83%;
  display: flex;
  align-items: center;
`;
const BlankLine = styled.p`
  margin: 0;
`;
const DiePaprikaIstContainer = styled.div`
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
const Paprikacrop1Icon = styled.img`
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
const SucheAngeklicktPaprikaRoot = styled.div`
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
const SucheAngeklicktPaprika = () => {
  return (
    <SucheAngeklicktPaprikaRoot>
      <Paprika>
        <PaprikaTxt>
          <span>Paprika</span>
          <Span>{`                    `}</Span>
        </PaprikaTxt>
      </Paprika>
      <DiePaprikaIstContainer>
        <PaprikaTxt>
          <BlankLine>&nbsp;</BlankLine>
          <BlankLine>{`Die Paprika ist eine Frucht, `}</BlankLine>
          <BlankLine>
            der Nachtschattengewächse. Die Früchte werden als Gemüse und Gewürz
            verwendet.
          </BlankLine>
          <BlankLine>&nbsp;</BlankLine>
          <BlankLine>
            <b>Gute Beetpartner:</b>
          </BlankLine>
          <BlankLine>Knoblauch, Karotten, Salate</BlankLine>
          <BlankLine>
            <b>Schlechte Beetpartner:</b>
          </BlankLine>
          <BlankLine>Fenchel, Erbsen, Zucchini</BlankLine>
          <BlankLine>&nbsp;</BlankLine>
          <BlankLine>
            <b>Bevorzugter Standort:</b>
          </BlankLine>
          <BlankLine>{`Sonnig, warm & windgeschützt (am Besten Südseite)`}</BlankLine>
          <BlankLine>sehr kälteempfindlich</BlankLine>
          <BlankLine>
            <b>{`Bevorzugter Boden: `}</b>
          </BlankLine>
          <BlankLine>humoser Boden, reich an Nährstoffen</BlankLine>
        </PaprikaTxt>
      </DiePaprikaIstContainer>
      <Paprikacrop1Icon alt="" src="/paprikacrop-1@2x.png" />
      <Component11Icon
        component11IconPosition="absolute"
        component11IconTop="40px"
        component11IconLeft="10px"
        component11IconCursor="unset"
      />
    </SucheAngeklicktPaprikaRoot>
  );
};

export default SucheAngeklicktPaprika;
