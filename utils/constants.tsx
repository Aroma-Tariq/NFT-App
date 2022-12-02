import { Dimensions, Platform } from 'react-native';
// import { getInputRangeFromIndexes } from 'react-native-snap-carousel';
const { width, height } = Dimensions.get('window');
const SLIDER_WIDTH = Dimensions.get('window').width;
const TRANSLATE_VALUE = Math.round(SLIDER_WIDTH * 0.01 / 10);

export const colors = {
  THEME: '#ff1844',
  SECOND_THEME: '#ec1c25',
  DARK_MODE: '#ec1c25',
  APP_THEME: 'rgb(70,110,185)',
  TEXT: 'black',
  BACKGROUND: 'white',
  GREY: 'grey',
  LIGHT_GREY: '#C4C4C4',
  WHITE_GREY: 'rgb(240, 240, 240)',
  DARK_GREY: 'rgb(110, 110, 110)',
  BLACK_GREY: 'rgb(80, 80, 80)',
  BORDER: 'rgb(231,179,163)',
  DARK_BROWN: '#E5653E',
  LIGHT_BROWN: 'rgb(249,244,231)',
  BLACK: 'black',
  WHITE: 'white',
  GREEN: 'rgb(141, 199, 170)',
  LIGHT_GREEN: 'rgb(102, 211, 18)',
  DIVIDER: 'rgb(200, 200, 200)',
  MESSAGEBOX: '#F3F3FC',
  CARD: '#DFE4EA'
};

export const fonts = {
  EXTRA_SMALL: 10,
  SMALL: 12,
  MEDIUM: 12,
  LARGE: 14,
  EXTRA_LARGE: 18
};

export const SCREEN_WIDTH = width;
export const isIOS = Platform.OS === 'ios' ? true : false;
export const isAndroid = Platform.OS === 'android' ? true : false;
export const SCREEN_HEIGHT = height;
export const ASPECT_RATIO = SCREEN_HEIGHT / SCREEN_WIDTH;
export const BASE_UNIT_WIDTH = 320;
export const BASE_UNIT_HEIGHT = 640;
export const BASE_ASPECT_RATIO = BASE_UNIT_HEIGHT / BASE_UNIT_WIDTH;
export const ASPECT_DIFF = ASPECT_RATIO / BASE_ASPECT_RATIO;

// export function scrollInterpolator(index, carouselProps) {
//   const range = [1, 0, -1];
//   const inputRange = getInputRangeFromIndexes(range, index, carouselProps);
//   const outputRange = range;

//   return { inputRange, outputRange };
// }
// export function animatedStyles(index, animatedValue, carouselProps) {
//   const translateProp = carouselProps.vertical ? 'translateY' : 'translateX';
//   let animatedOpacity = {};
//   let animatedTransform = {};

//   if (carouselProps.inactiveSlideOpacity < 1) {
//     animatedOpacity = {
//       opacity: animatedValue.interpolate({
//         inputRange: [-1, 0, 1],
//         outputRange: [carouselProps.inactiveSlideOpacity, 1, carouselProps.inactiveSlideOpacity],
//       })
//     };
//   }

//   if (carouselProps.inactiveSlideScale < 1) {
//     animatedTransform = {
//       transform: [{
//         scale: animatedValue.interpolate({
//           inputRange: [-1, 0, 1],
//           outputRange: [carouselProps.inactiveSlideScale, 1, carouselProps.inactiveSlideScale]
//         }),
//         [translateProp]: animatedValue.interpolate({
//           inputRange: [-1, 0, 1],
//           outputRange: [
//             TRANSLATE_VALUE * carouselProps.inactiveSlideScale,
//             0,
//             -TRANSLATE_VALUE * carouselProps.inactiveSlideScale]
//         }),
//       }]
//     };
//   }

//   return {
//     ...animatedOpacity,
//     ...animatedTransform
//   };
// }