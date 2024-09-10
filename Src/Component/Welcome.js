import {
  View,
  Text,
  Image,
  StyleSheet,

} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import COLORS from '../Const/Color';
import {PrimaryButton} from '../Const/Button';
import Logo from '../images/logo.png';

const Welcome = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <View style={styles.centerContainer}>
        <Image source={Logo} resizeMode="contain" style={styles.img} />
      </View>

      <View style={styles.name}>
        <Text style={styles.welcome}>Welcome Ramesh</Text>
      </View>
     <View style={{flexDirection:"row",justifyContent:"center"}}>
     <PrimaryButton
         
          title="Logout"
          filled
        />
     </View>
    </SafeAreaView>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  centerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    top: 50,
  },
  img: {
    width: 233,
    height: 170,
    resizeMode: 'cover',
  },
  name:{
    marginVertical:120,
  },
  welcome: {
    fontSize: 32,
    fontWeight: "700",
   textAlign:"center",
   color:COLORS.buttonText
  },
});
