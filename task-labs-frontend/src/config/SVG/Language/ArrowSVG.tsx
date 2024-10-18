import * as React from "react";
import Svg, { G, Path, Defs, ClipPath, Rect, SvgProps } from "react-native-svg";
const SVGComponent = (props: SvgProps) => (
  <Svg
    width={10}
    height={10}
    viewBox="0 0 10 10"
    fill="none"
    {...props}
  >
    <G clipPath="url(#clip0_15_198)">
      <Path
        d="M3.0875 3.5791L5 5.48743L6.9125 3.5791L7.5 4.1666L5 6.6666L2.5 4.1666L3.0875 3.5791Z"
        fill="#757575"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_15_198">
        <Rect width={10} height={10} fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SVGComponent;
