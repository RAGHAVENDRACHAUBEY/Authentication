import {Image, SafeAreaView, StyleSheet, View, Dimensions, StatusBar} from 'react-native';
import React, { useEffect } from 'react';
import Leftlogo from "../images/Leftlogo.png"
import Rightlogo from "../images/Maskgroupright.png"
import Logo from "../images/logo.png"

const Splashscreen = ({navigation}) => {

  useEffect(()=>{
    setTimeout(()=>{
    navigation.navigate('Start')
    },2000)
  },[])
    
  return (
    <SafeAreaView style={styles.container}>
       
      <View style={styles.maincontainer}>
      <View style={styles.imgleft}>
          <Image source={Leftlogo} resizeMode="cover" style={styles.imgsvg}/>
        </View>
        <View style={styles.imgright}>
          <Image source={Rightlogo} resizeMode="cover" style={styles.imgsvg}/>
        </View>
        <View style={styles.centerContainer}>
          <Image source={Logo} resizeMode="contain" style={styles.img}/>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Splashscreen;

const { height, width } = Dimensions.get('window'); 


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
  },
  maincontainer: {
    position: 'relative',
  },
  imgright: {
    position: 'absolute',
    right: 0,
    top: 0,
  },
  imgsvg:{
    width: 180, 
    height: 200,
  },
  centerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    // height: height, 
  },
  img: {
    width: 400, 
    height: 300,
  },
});
