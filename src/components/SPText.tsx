import {StyleSheet, Text, TextStyle, View} from 'react-native';
import React from 'react';

interface IProps {
  varient: string;
  fontSize: number;
  color: string;
  children: React.ReactNode | undefined;
  style: TextStyle;
}

export const getFontVarient = (varient: string) => {
  switch (varient) {
    case 'thin':
      return 'Raleway-Thin';
    case 'bold':
      return 'Raleway-Bold';
    case 'extra-bold':
      return 'Raleway-ExtraBold';
    case 'extra-light':
      return 'Raleway-ExtraLight';
    case 'light':
      return 'Raleway-Light';
    case 'medium':
      return 'Raleway-Medium';
    case 'semi-bold':
      return 'Raleway-SemiBold';
    default:
      return 'Raleway-Regular';
  }
};

const SPText = ({
  varient = 'regular',
  fontSize = 16,
  color = '#000',
  children,
  style,
}: Partial<IProps>) => {
  return (
    <Text
      style={[
        {
          fontFamily: getFontVarient(varient),
          fontSize: fontSize,
          color: color,
          ...style,
        },
      ]}>
      {children}
    </Text>
  );
};

export default SPText;

const styles = StyleSheet.create({});
