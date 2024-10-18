import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
const EnglandFlag = (props: SvgProps) => (
  <Svg
    id="flag-icons-gb"
    viewBox="0 0 640 480"
    {...props}
  >
    <Path fill="#012169" d="M0 0h640v480H0z" />
    <Path
      fill="#FFF"
      d="m75 0 244 181L562 0h78v62L400 241l240 178v61h-80L320 301 81 480H0v-60l239-178L0 64V0z"
    />
    <Path
      fill="#C8102E"
      d="m424 281 216 159v40L369 281zm-184 20 6 35L54 480H0zM640 0v3L391 191l2-44L590 0zM0 0l239 176h-60L0 42z"
    />
    <Path fill="#FFF" d="M241 0v480h160V0zM0 160v160h640V160z" />
    <Path fill="#C8102E" d="M0 193v96h640v-96zM273 0v480h96V0z" />
  </Svg>
);
export default EnglandFlag;
