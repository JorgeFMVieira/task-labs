import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
const Google = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <Path
      d="M12.545 10.239V14.06H17.99C17.278 16.375 15.343 18.032 12.545 18.032C9.213 18.032 6.512 15.331 6.512 12C6.512 8.669 9.213 5.968 12.545 5.968C14.043 5.968 15.411 6.517 16.466 7.421L19.28 4.607C17.503 2.988 15.139 2 12.545 2C7.021 2 2.543 6.477 2.543 12C2.543 17.523 7.021 22 12.545 22C20.941 22 22.794 14.15 21.971 10.252L12.545 10.239Z"
      fill="black"
    />
  </Svg>
);
export default Google;
