import { StyleSheet, Platform } from 'react-native';

export function create(styles) {
  const platformStyles = {};
  Object.keys(styles).forEach((name) => {
    let { ios, android, ...style } = { ...styles[name] };
    if (ios && Platform.OS === 'ios') {
      style = { ...style, ...ios };
    }
    if (android && Platform.OS === 'android') {
      style = { ...style, ...android };
    }

    if (name === 'ios' && Platform.OS === 'ios') {
      Object.keys(style).forEach((styleName) => {
        if (platformStyles[styleName]) {
          platformStyles[styleName] = { ...platformStyles[styleName], ...style[styleName] };
        }
      });
    }

    if (name === 'android' && Platform.OS === 'android') {
      Object.keys(style).forEach((styleName) => {
        if (platformStyles[styleName]) {
          platformStyles[styleName] = { ...platformStyles[styleName], ...style[styleName] };
        }
      });
    }

    if (name !== 'ios' && name !== 'android') {
      platformStyles[name] = style;
    }
  });

  return StyleSheet.create(platformStyles);
}
