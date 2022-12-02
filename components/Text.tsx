import React from 'react';
import { StyleSheet, Text as RNText } from 'react-native';
import { colors, isAndroid } from '../utils/constants';
import { normalizeFont } from '../utils/functions';
import { useSelector, useDispatch } from 'react-redux';

const Text = (props) => {
//   const appState = useSelector((state) => state.app);
  const { center, right, style, bold, size, bolder, boldest, color } = props;
  return (
    <RNText
      {...props}
      allowFontScaling={false}
      style={[
        styles.text,
        center && styles.center,
        right && styles.right,
        bold && styles.bold,
        bolder && styles.bolder,
        boldest && styles.boldest,
        size && { fontSize: normalizeFont(size) },
        // { color: appState.isDarkMode ? color || 'white' : color },
        style,
      ]}
    />
  );
};

const styles = StyleSheet.create({
  text: {
    color: colors.TEXT,
    // fontSize: normalizeFont(13),
    fontWeight: '300',
    fontFamily: isAndroid ? 'sans-serif-light' : undefined,
  },
  center: {
    textAlign: 'center',
  },
  right: {
    textAlign: 'right',
  },
  bold: {
    fontWeight: 'normal',
    fontFamily: isAndroid ? 'sans-serif' : undefined,
  },
  bolder: {
    fontWeight: '500',
    fontFamily: isAndroid ? 'sans-serif-medium' : undefined,
  },
  boldest: {
    fontWeight: 'bold',
    fontFamily: isAndroid ? 'sans-serif' : undefined,
  },
});

export default Text;

