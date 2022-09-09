import React from 'react';
import FastImage from 'react-native-fast-image';
import { View, Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const StartupScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            {/* <Image
          style={styles.logo}
          source={require('../assets/PNB_Splash_Screen.gif')}
        //   source={{uri: 'https://drive.google.com/file/d/1RH1Q7NOdE1-3-s0RWcx8RXESONFZT9kp/view?usp=sharing'}}
        //   source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/2/2c/Rotating_earth_%28large%29.gif'}}
        //   require('../assets/PNB_Splash_Screen')}
        /> */}
        <FastImage
    style={{ width: "100%", height: "100%" }}
    source={require('../assets/PNB_Splash_Screen.gif')}
    resizeMode={FastImage.resizeMode.contain}
    onLoad={() => {
      setTimeout(
        () => {
            navigation.navigate('Home')
        },
        20000
      );
    }}
  />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
    //   paddingTop: 50,
    },
    logo: {
      width: '100%',
      height: '100%',
    }
  });

export default StartupScreen;