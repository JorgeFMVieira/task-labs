import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
const FranceFlag = (props: SvgProps) => (
  <Svg
    id="flag-icons-fr"
    viewBox="0 0 640 480"
    {...props}
  >
    <Path fill="#fff" d="M0 0h640v480H0z" />
    <Path fill="#000091" d="M0 0h213.3v480H0z" />
    <Path fill="#e1000f" d="M426.7 0H640v480H426.7z" />
  </Svg>
);
export default FranceFlag;
