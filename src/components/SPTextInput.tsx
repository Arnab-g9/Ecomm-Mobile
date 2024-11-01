import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import SPText, {getFontVarient} from './SPText';
import {inputFieldBg} from '../constants/GlobalStyles';

interface IInputProps extends TextInputProps {
  label: string;
  renderLeftIcon: () => JSX.Element;
  renderRightIcon: () => JSX.Element;
  errorMessege: string;
  inputContainerStyle: ViewStyle;
}

const SPTextInput = (props: Partial<IInputProps>) => {
  return (
    <View>
      {props.label && <SPText>{props.label}</SPText>}
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: inputFieldBg.bg_grey,
          alignItems: 'center',
          ...props.inputContainerStyle,
        }}>
        {props.renderLeftIcon && props.renderLeftIcon()}
        <TextInput
          {...props}
          style={{flex: 1, fontFamily: getFontVarient('medium'), fontSize: 16}}
          onChangeText={props.onChangeText}
        />
        {props.renderRightIcon && props.renderRightIcon()}
      </View>
      {props.errorMessege && <SPText>{props.errorMessege}</SPText>}
    </View>
  );
};

export default SPTextInput;

const styles = StyleSheet.create({});
