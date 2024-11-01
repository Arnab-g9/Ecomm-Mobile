import {
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {LocalSvg} from 'react-native-svg/css';
interface ISvg {
  filePath: ImageSourcePropType;
  size?: number;
  width?: number;
  height?: number;
  style?: ViewStyle;
}

const CustomSvg = ({filePath, size, height = 22, width = 22, style}: ISvg) => {
  return (
    <LocalSvg
      asset={filePath}
      height={size ? size : height}
      width={size ? size : width}
      style={style}
    />
  );
};

export default CustomSvg;

const styles = StyleSheet.create({});
