// src/styles/fonts.js
import { Platform } from 'react-native';

export type fontsProps = {
    title: {
        fontSize: number;
        fontWeight: any;
        fontFamily: string;
    };
    bodyText: {
        fontSize: number;
        fontWeight: any;
        fontFamily: string;
    };
}

export const fonts: fontsProps = {
  title: {
    fontSize: 24,
    fontWeight: Platform.OS === 'ios' ? '700' : 'bold',
    fontFamily: Platform.OS === 'ios' ? 'System' : 'sans-serif',
  },
  bodyText: {
    fontSize: 16,
    fontWeight: Platform.OS === 'ios' ? '400' : 'normal',
    fontFamily: Platform.OS === 'ios' ? 'System' : 'sans-serif',
  },
};