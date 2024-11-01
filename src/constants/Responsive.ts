import {Dimensions} from 'react-native';

export const deviceHeight = Dimensions.get('window').height;
export const deviceWidth = Dimensions.get('window').width;

export const isMobile = Dimensions.get('window').width <= 450;

export const responsiveFont = (fontSize: number) => {
  return isMobile ? fontSize : fontSize + 8;
};
