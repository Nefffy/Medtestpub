import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    body {
      margin: 0; line-height: normal;
    }
:root {

/* fonts */
--font-inter: Inter;

/* font sizes */
--font-size-xl: 20px;
--font-size-21xl: 40px;

/* Colors */
--color-palegoldenrod: #ccd0a1;
--color-black: #000;
--color-wheat: #e8d5a7;

/* Paddings */
--padding-xs: 12px;

/* border radiuses */
--br-3xs: 10px;

}
`;
