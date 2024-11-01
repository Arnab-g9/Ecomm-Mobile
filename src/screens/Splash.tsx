import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {GlobalStyles, TextColor} from '../constants/GlobalStyles';
import CustomSvg from '../components/CustomSvg';
import SPText from '../components/SPText';
import SPThemeBtn from '../components/SPThemeBtn';

const Splash = () => {
  return (
    <View style={[GlobalStyles.container]}>
      <View
        style={[
          {flex: 0.8, justifyContent: 'flex-end'},
          GlobalStyles.screenPadding,
        ]}>
        {/* @ts-ignore */}
        <View
          style={[
            GlobalStyles.container,
            // @ts-ignore
            GlobalStyles.center,
            {gap: 20, justifyContent: 'flex-end', paddingBottom: 50},
          ]}>
          <View
            style={[
              {
                height: 140,
                width: 140,
                backgroundColor: '#fff',
                borderRadius: 80,
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 3,
                },
                shadowOpacity: 0.27,
                shadowRadius: 4.65,

                elevation: 6,
              },
              // @ts-ignore
              GlobalStyles.center,
            ]}>
            <CustomSvg
              filePath={require('../assets/svg/Logo.svg')}
              width={81}
              height={92}
              style={{alignSelf: 'center'}}
            />
          </View>
          <View
            style={[
              {
                alignItems: 'center',
                ...GlobalStyles.screenPadding,
                paddingVertical: 0,
                gap: 10,
              },
            ]}>
            <SPText style={{fontSize: 52}} varient="bold">
              Shoppe
            </SPText>
            <SPText
              style={{fontSize: 19, textAlign: 'center', lineHeight: 30}}
              varient="light">
              Beautiful eCommerce UI Kit for your online store
            </SPText>
          </View>
        </View>
      </View>
      {/* Button Container */}
      <View
        style={[
          {
            flex: 0.2,
            ...GlobalStyles.screenPadding,
            paddingBottom: 50,
            gap: 20,
            justifyContent: 'flex-end',
          },
        ]}>
        <SPThemeBtn
          title="Let's get started"
          style={{borderRadius: 16}}
          textStyle={{color: TextColor.text_white, fontSize: 22}}
          titleVarient="light"
        />

        <View
          style={{
            flexDirection: 'row',
            gap: 20,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <SPText style={{fontSize: 15}} varient="light">
            I already have an account
          </SPText>
          <SPThemeBtn
            isRightSideIcon
            imagePath={require('../assets/svg/Right-Arrow.svg')}
            style={{
              height: 30,
              width: 30,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 50,
            }}
            iconHeight={15}
            iconWidth={12}
          />
        </View>
      </View>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({});
