import {Alert, Linking, PixelRatio, Dimensions, Platform} from 'react-native';
import {
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
  BASE_UNIT_WIDTH,
  BASE_UNIT_HEIGHT,
} from './constants';
const {height, width} = Dimensions.get('window');
import DeviceInfo from 'react-native-device-info';
const base_unit_width = 375;
const base_unit_height = 812;
const base_aspect_ratio = base_unit_height / base_unit_width;

export function normalizeFont(size, uncontrolled = false) {
  const fontSize = (SCREEN_HEIGHT / BASE_UNIT_HEIGHT) * size;
  if (uncontrolled) {
    return fontSize;
  } else {
    return fontSize > 20 ? 20 : fontSize;
  }
}

// export function validateForm(object) {
//   let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//   let phoneReg = /^((\+92)|(0092))-{0,1}\d{3}-{0,1}\d{7}$|^\d{11}$|^\d{4}-\d{7}$/;

//   const entries = Object.entries(object);
//   for (let i = 0; i < entries.length; i++) {
//     if (entries[i][1] === '' || entries[i][1] == null || entries[i][1] === 0) {
//       let error = entries[i][0] + ' ' + 'is empty';
//       return [false, error];
//     } else if (entries[i][0].includes('Email')) {
//       if (reg.test(entries[i][1]) === false) {
//         let error = entries[i][0] + ' ' + 'is invalid';
//         return [false, error];
//       }
//     } else if (entries[i][0].includes('Phone Number')) {
//       if (phoneReg.test(entries[i][1]) === false) {
//         let error = entries[i][0] + ' ' + 'is invalid';
//         return [false, error];
//       }
//     }
//   }
//   return [true];
// }

export function normalizeX(size) {
  return Math.round((SCREEN_WIDTH / BASE_UNIT_WIDTH) * size);
}

export function normalizeY(size) {
  return Math.round((SCREEN_HEIGHT / BASE_UNIT_HEIGHT) * size);
}

export function getHeight(h) {
  const elemHeight = parseFloat(h);
  return PixelRatio.roundToNearestPixel((height * elemHeight) / 100);
}

// export function isIphoneX() {
//   return Platform.OS === 'ios' && DeviceInfo.hasNotch();
// }

export function getWidth(w) {
  const elemWidth = parseFloat(w);
  return PixelRatio.roundToNearestPixel((width * elemWidth) / 100);
}
