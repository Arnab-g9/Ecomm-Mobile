import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import SPText from './SPText';
import {GlobalStyles, TextColor, themeColor} from '../constants/GlobalStyles';
import CustomSvg from './CustomSvg';
import {assets} from '../../react-native.config';

interface Iprops {
  title: string;
  titleVarient: string;
  bgColor: string;
  style: ViewStyle;
  isLeftSideIcon: boolean;
  isRightSideIcon: boolean;
  imagePath: any;
  textStyle: TextStyle;
  iconSize?: number;
  iconWidth?: number;
  iconHeight?: number;
}

const SPThemeBtn = ({
  title,
  titleVarient = 'regular',
  bgColor = themeColor.btnColor.primary,
  style,
  isLeftSideIcon,
  isRightSideIcon,
  imagePath,
  textStyle,
  iconSize,
  iconWidth,
  iconHeight,
}: Partial<Iprops>) => {
  return (
    <TouchableOpacity
      style={[
        // @ts-ignore
        {
          ...styles.btn,
          backgroundColor: bgColor,
          ...GlobalStyles.center,
          ...style,
        },
      ]}>
      {isLeftSideIcon && (
        <CustomSvg
          filePath={imagePath}
          size={iconSize}
          height={iconHeight}
          width={iconWidth}
        />
      )}
      <SPText
        varient={titleVarient}
        style={{color: TextColor.text_black, ...textStyle}}>
        {title}
      </SPText>
      {isRightSideIcon && <CustomSvg filePath={imagePath} />}
    </TouchableOpacity>
  );
};

export default SPThemeBtn;

const styles = StyleSheet.create({
  btn: {
    height: 61,
    flexDirection: 'row',
  },
});
