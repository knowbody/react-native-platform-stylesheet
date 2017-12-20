import { StyleSheet, Dimensions, Platform } from 'react-native'
import { isIphoneX } from 'react-native-iphone-x-helper'

export function create(styles) {
  const platformStyles = {};
  Object.keys(styles).forEach((name) => {
    let { iosx, ios, android, ...style } = { ...styles[name] };
    if (iosx && isIphoneX()) {
      style = { ...style, ...iosx };
    }
    if (ios && Platform.OS === 'ios') {
      style = { ...style, ...ios };
    }
    if (android && Platform.OS === 'android') {
      style = { ...style, ...android };
    }
    
     if (name === 'iosx' && isIphoneX()) {
      Object.keys(style).forEach((styleName) => {
        if (platformStyles[styleName]) {
          platformStyles[styleName] = { ...platformStyles[styleName], ...style[styleName] };
        }
      });
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

    if ( name !== 'iosx' && name !== 'ios' && name !== 'android') {
      platformStyles[name] = style;
    }
  });

  return StyleSheet.create(platformStyles);
}
