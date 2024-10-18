import * as React from "react";
import Svg, { G, Path, Defs, ClipPath, Rect, SvgProps } from "react-native-svg";
const ArrowUpSVG = (props: SvgProps) => (
  <Svg
    width={10}
    height={10}
    viewBox="0 0 10 10"
    fill="none"
    {...props}
  >
    <G clipPath="url(#clip0_20_637)">
      <Path
        d="M3.0875 6.42087L5 4.51254L6.9125 6.42087L7.5 5.83337L5 3.33337L2.5 5.83337L3.0875 6.42087Z"
        fill="#757575"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_20_637">
        <Rect width={10} height={10} fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default ArrowUpSVG;
