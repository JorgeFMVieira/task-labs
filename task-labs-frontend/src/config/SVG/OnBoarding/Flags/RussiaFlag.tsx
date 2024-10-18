import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
const RussiaFlag = (props: SvgProps) => (
  <Svg
    id="flag-icons-ru"
    viewBox="0 0 640 480"
    {...props}
  >
    <Path fill="#fff" d="M0 0h640v160H0z" />
    <Path fill="#0039a6" d="M0 160h640v160H0z" />
    <Path fill="#d52b1e" d="M0 320h640v160H0z" />
  </Svg>
);
export default RussiaFlag;
