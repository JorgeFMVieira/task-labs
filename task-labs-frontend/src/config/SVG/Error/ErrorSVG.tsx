import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
const ErrorSVG = (props: SvgProps) => (
  <Svg
    width={20}
    height={20}
    viewBox="0 0 44 38"
    fill="none"
    {...props}
  >
    <Path
      d="M22 7.98L37.06 34H6.94L22 7.98ZM22 0L0 38H44L22 0Z"
      fill="#DC3545"
    />
    <Path d="M24 28H20V32H24V28Z" fill="#DC3545" />
    <Path d="M24 16H20V26H24V16Z" fill="#DC3545" />
  </Svg>
);
export default ErrorSVG;
