import * as React from "react";
import { Animated } from "react-native";
import Svg, { Path, SvgProps } from "react-native-svg";
import colors from "../../colors"; // Adjust the path to your colors file

// Create an animated version of the Path component
const AnimatedPath = Animated.createAnimatedComponent(Path);

interface SvgNavbarIconProps extends SvgProps {
    isActive: boolean;
    pathSvg: string;
}

const SvgNavbarIcon = ({ isActive, ...props }: SvgNavbarIconProps) => {
    // Create an Animated.Value for color transition
    const fillColor = React.useRef(new Animated.Value(isActive ? 1 : 0)).current;

  // Animate the fill color when `isActive` changes
    React.useEffect(() => {
        Animated.timing(fillColor, {
            toValue: isActive ? 1 : 0,
            duration: 150, // duration of the animation
            useNativeDriver: false, // We can't use native driver for color interpolation
        }).start();
    }, [isActive]);

    // Interpolate between two colors based on the Animated value
    const animatedFill = fillColor.interpolate({
        inputRange: [0, 1],
        outputRange: [colors.neutral, colors.main], // Replace with the colors you want for inactive/active
    });

  return (
      <Svg height={20} width={22.5} viewBox="0 0 576 512" {...props}>
          <AnimatedPath
                d={props.pathSvg}
                fill={animatedFill} // Use the animated fill color
            />
      </Svg>
  );
};

export default SvgNavbarIcon;
