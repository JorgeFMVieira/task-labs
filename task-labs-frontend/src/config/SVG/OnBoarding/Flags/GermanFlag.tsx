import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
const GermanFlag = (props: SvgProps) => (
  <Svg
    id="flag-icons-de"
    viewBox="0 0 640 480"
    {...props}
  >
    <Path fill="#fc0" d="M0 320h640v160H0z" />
    <Path fill="#000001" d="M0 0h640v160H0z" />
    <Path fill="red" d="M0 160h640v160H0z" />
  </Svg>
);
export default GermanFlag;
