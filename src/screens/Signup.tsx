import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {
  GlobalStyles,
  screenBgColor,
  TextColor,
} from '../constants/GlobalStyles';
import CustomSvg from '../components/CustomSvg';
import {
  deviceHeight,
  deviceWidth,
  responsiveFont,
} from '../constants/Responsive';
import SPText from '../components/SPText';
import SPTextInput from '../components/SPTextInput';
import SPThemeBtn from '../components/SPThemeBtn';
import {CountryPicker} from 'react-native-country-codes-picker';

interface IRegisterProps {
  emailValue: string;
  emailError: string;
  passwordValue: string;
  passwordError: string;
  phnoValue: string;
  phnoError: string;
  showCountryPickerModal: boolean;
  countryCode: string;
}

const Signup = () => {
  const [registerCradentials, setRegisterCradentials] =
    useState<IRegisterProps>({
      emailValue: '',
      emailError: '',
      passwordValue: '',
      passwordError: '',
      phnoValue: '',
      phnoError: '',
      showCountryPickerModal: false,
      countryCode: '',
    });
  console.log(
    registerCradentials.emailValue,
    registerCradentials.passwordValue,
    registerCradentials.countryCode,
    registerCradentials.phnoValue,
    registerCradentials.showCountryPickerModal,
  );
  return (
    <View
      style={[
        GlobalStyles.container,
        {backgroundColor: screenBgColor.bg_white},
      ]}>
      {/* banner container */}
      <View
        style={{
          height: deviceHeight * 0.5,
          flexDirection: 'row',
          position: 'relative',
        }}>
        <View
          style={{width: deviceWidth * 0.6, justifyContent: 'space-between'}}>
          <CustomSvg
            filePath={require('../assets/svg/SignUp/Bubble-01.svg')}
            height={deviceHeight * 0.3}
            width={deviceHeight * 0.3}
          />

          <TouchableOpacity style={{paddingLeft: 20, paddingBottom: 20}}>
            <CustomSvg
              filePath={require('../assets/svg/SignUp/Camera.svg')}
              size={Math.min(deviceHeight, deviceWidth) * 0.15}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: deviceWidth * 0.4,
            alignItems: 'flex-end',
            paddingTop: 70,
          }}>
          <CustomSvg
            filePath={require('../assets/svg/SignUp/Bubble-02.svg')}
            width={deviceWidth * 0.3}
            height={deviceHeight * 0.3}
          />
        </View>
        {/* This View for Text render on position absolute */}
        <View
          style={{
            position: 'absolute',
            ...GlobalStyles.screenPadding,
            paddingVertical: 0,
            top: '25%',
          }}>
          <SPText varient="bold" style={{fontSize: responsiveFont(50)}}>
            Create
          </SPText>
          <SPText varient="bold" style={{fontSize: responsiveFont(50)}}>
            Account
          </SPText>
        </View>
      </View>
      {/* input container */}
      <View
        style={[
          GlobalStyles.screenPadding,
          {
            gap: 10,
            height: deviceHeight * 0.3,
            justifyContent: 'center',
          },
        ]}>
        <SPTextInput
          placeholder="Email"
          inputContainerStyle={styles.inputStyle}
          value={registerCradentials.emailValue}
          onChangeText={(res: string) =>
            setRegisterCradentials({...registerCradentials, emailValue: res})
          }
        />
        <SPTextInput
          placeholder="Password"
          inputContainerStyle={styles.inputStyle}
          renderRightIcon={() => (
            <TouchableOpacity>
              <CustomSvg
                filePath={require('../assets/svg/SignUp/Eye-slash.svg')}
              />
            </TouchableOpacity>
          )}
          value={registerCradentials.passwordValue}
          onChangeText={(res: string) =>
            setRegisterCradentials({...registerCradentials, passwordValue: res})
          }
        />
        <SPTextInput
          placeholder="Your number"
          inputContainerStyle={styles.inputStyle}
          value={registerCradentials.phnoValue}
          onChangeText={(res: string) =>
            setRegisterCradentials({...registerCradentials, phnoValue: res})
          }
          renderLeftIcon={() => (
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                gap: 5,
                alignItems: 'center',
                borderRightWidth: 1,
                paddingRight: 5,
                marginRight: 5,
              }}
              onPress={() =>
                setRegisterCradentials({
                  ...registerCradentials,
                  showCountryPickerModal: true,
                })
              }>
              {registerCradentials.countryCode ? (
                <SPText>{registerCradentials.countryCode}</SPText>
              ) : (
                <>
                  <CustomSvg
                    filePath={require('../assets/svg/SignUp/Flag.svg')}
                    size={22}
                  />
                  <CustomSvg
                    filePath={require('../assets/svg/SignUp/Down-arrow.svg')}
                    size={22}
                  />
                </>
              )}
            </TouchableOpacity>
          )}
        />
      </View>
      {/* buttons container*/}
      <View
        style={[
          {
            height: deviceHeight * 0.2,
            ...GlobalStyles.screenPadding,
            paddingVertical: 0,
          },
        ]}>
        <SPThemeBtn
          title="Done"
          style={{borderRadius: 16}}
          textStyle={{
            color: TextColor.text_white,
            fontSize: responsiveFont(22),
          }}
        />
        <SPThemeBtn
          title="Cancel"
          style={{borderRadius: 16, backgroundColor: 'transparent'}}
          textStyle={{
            fontSize: responsiveFont(15),
          }}
        />
      </View>
      {/* Here is the country picker modal */}
      <CountryPicker
        show={registerCradentials.showCountryPickerModal}
        // when picker button press you will get the country object with dial code
        pickerButtonOnPress={item => {
          setRegisterCradentials({
            ...registerCradentials,
            countryCode: item,
            showCountryPickerModal: false,
          });
        }}
        lang={''}
      />
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  inputStyle: {height: 52, paddingHorizontal: 20, borderRadius: 60},
});
