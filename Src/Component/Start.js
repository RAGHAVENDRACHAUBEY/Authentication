import {
  Image,
  SafeAreaView,
  StyleSheet,
  View,
  Dimensions,
  Text,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Leftlogo from '../images/Leftlogo.png';
import Rightlogo from '../images/Maskgroupright.png';
import Logo from '../images/logo.png';
import {PrimaryButton} from '../Const/Button';
import COLORS from '../Const/Color';

const Start = ({navigation}) => {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <View style={styles.maincontainer}>
          <View style={styles.imgleft}>
            <Image source={Leftlogo} resizeMode="cover" style={styles.imgsvg} />
          </View>
          <View style={styles.imgright}>
            <Image
              source={Rightlogo}
              resizeMode="cover"
              style={styles.imgsvg}
            />
          </View>
          <View style={styles.centerContainer}>
            <Image source={Logo} resizeMode="contain" style={styles.img} />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.textcontent}>
              Sparkle & Shine Transform Your Drive with Every Wash!
            </Text>
            <View></View>
            <PrimaryButton
              title="Let's Start"
              onPress={() => navigation.navigate("Signin")}
              filled
              style={{
                marginTop: 18,
                marginBottom: 4,
              }}
            />
            <View
              style={styles.midconatiner}>
              <Text style={styles.textaccount}>Already have an account ?</Text>
              <TouchableOpacity
              onPress={() => navigation.navigate("Signin")}
              >
                <Text style={styles.signin}>Sign in</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Start;

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  safeContainer: {
    backgroundColor: '#ffff',
    height: height,
  },
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    position: 'relative',
  },
  maincontainer: {
    flex: 1,
    position: 'relative',
    justifyContent: 'center',
  },
  imgright: {
    position: 'absolute',
    right: 0,
    top: 0,
  },
  imgleft: {
    position: 'absolute',
    left: 0,
    top: 0,
  },
  imgsvg: {
    width: 130,
    height: 160,
  },
  centerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: 380,
    height: 270,
    resizeMode: 'cover',
  },
  textContainer: {
    top: 35,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  textcontent: {
    color: COLORS.textcolor,
    fontSize: 24,
    lineHeight: 36,
    fontWeight: '600',
    textAlign: 'center',
  },
  midconatiner:{
    flexDirection: 'row',
    justifyContent: 'center',
    top: 45,
  },
  textaccount: {
    color: COLORS.textcolor,
    fontSize: 14,
  },
  signin: {
    fontSize: 14,
    color: COLORS.buttonText,
    fontWeight: '500',
    marginLeft: 6,
    borderBottomWidth: 1,
  },
});
