import * as React from "react";
import Svg, { G, Path, Defs, ClipPath, Rect, SvgProps } from "react-native-svg";
    const LogoSVG = (props: SvgProps) => (
    <Svg
        width={50}
        height={50}
        viewBox="0 0 50 50"
        fill="none"
        {...props}
    >
        <G clipPath="url(#clip0_19_557)">
        <Path
            d="M3.1 43.9C5.6 42.8 8.1 41.6 10.6 40.5C15.4 29 20.1 17.5 24.9 6"
            fill="#78C6A3"
        />
        <Path
            d="M47 43.9C44.5 42.8 42 41.6 39.5 40.5C34.7 29 30 17.5 25.2 6"
            fill="#78C6A3"
        />
        <Path d="M3.1 43.9H46.8C39.5 42.4 32.2 40.8 24.8 39.3" fill="#78C6A3" />
        </G>
        <Defs>
        <ClipPath id="clip0_19_557">
            <Rect width={50} height={50} fill="white" />
        </ClipPath>
        </Defs>
    </Svg>
    );
export default LogoSVG;