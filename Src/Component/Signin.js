import {
  View,
  Text,
  Image,
  Pressable,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import COLORS from '../Const/Color';
import {PrimaryButton} from '../Const/Button';
import Logo from '../images/logo.png';
import Maskgroup from '../images/Maskgroup.png';
import google from '../images/Group1.png';
import apple from '../images/Group2.png';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Signin = ({navigation}) => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);

  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (!phone || !password) {
      Alert.alert('Error', 'Please enter both phone number and password');
      return; 
    }
  
    try {
      const response = await fetch('https://tor.appdevelopers.mobi/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          phone: phone,
          password: password,
        }),
      });
      const result = await response.json();
      if (result.status) {
        Alert.alert('Success', 'User signed in successfully');
        navigation.navigate('Welcome');  
      } else {
        Alert.alert('Something went wrong');
      }
    } catch (error) {
      Alert.alert('Error', 'Network error. Please try again later.');
      console.log('Error:', error); 
    }
  };
  
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.centerContainer}>
          <Image source={Logo} resizeMode="contain" style={styles.img} />
        </View>
        <View style={styles.imgleft}>
          <Image source={Maskgroup} resizeMode="cover" style={styles.imgsvg} />
        </View>

        <View style={{flex: 1, marginHorizontal: 20}}>
          <View style={{marginVertical: 8}}>
            <Text style={styles.content}>Sign In</Text>

            <Text style={styles.hello}>
              {' '}
              Hi ! Welcome back, you have been missed{' '}
            </Text>
          </View>

          <View style={{position: 'relative'}}>
            <Text style={styles.label}>Phone</Text>

            <View style={styles.inputs}>
              <Feather
                name="phone"
                color={COLORS.textcolor}
                style={styles.iconsu}
                size={15}
              />
              <TextInput
                placeholder="Enter your phone number"
                placeholderTextColor={COLORS.textcolor}
                keyboardType="number-pad"
                style={styles.inputfocus}
                value={phone}
                onChangeText={phone => setPhone(phone)}
              />
            </View>
          </View>

          <View style={{position: 'relative'}}>
            <Text style={styles.label}>Password</Text>
            <View style={styles.inputs}>
              <Feather
                name="lock"
                color={COLORS.textcolor}
                style={styles.iconsu}
                size={15}
              />
              <TextInput
                placeholder="password"
                placeholderTextColor={COLORS.textcolor}
                style={styles.inputfocus}
                secureTextEntry={isPasswordShown}
                value={password}
                onChangeText={password => setPassword(password)}
              />
              <TouchableOpacity
                onPress={() => setIsPasswordShown(!isPasswordShown)}
                style={{position: 'absolute', right: 12}}>
                {isPasswordShown ? (
                  <Ionicons name="eye-off" size={15} color={COLORS.black} />
                ) : (
                  <Ionicons name="eye" size={15} color={COLORS.black} />
                )}
              </TouchableOpacity>
            </View>
            <Text style={styles.forgot}>Forgot password ?</Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              paddingVertical: 10,
            }}>
            <PrimaryButton onPress={handleLogin} title="Sign in" filled />
          </View>

          <View style={styles.prev}>
            <View style={styles.orcontent} />
            <Text style={{fontSize: 15, fontWeight: '500'}}>Or </Text>
            <View style={styles.orcontent} />
          </View>
          <View style={styles.icons}>
            <Image source={google} resizeMode="cover" />
            <Image source={apple} resizeMode="cover" />
          </View>
          <View style={styles.midconatiner}>
            <Text style={styles.textaccount}>Don’t have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
              <Text style={styles.signin}>Sign Up</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.primarytext}>
            <Text style={styles.textContent}>
              By login or sign up, you agree to our terms of use and privacy
              policy
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Signin;

const styles = StyleSheet.create({
  content: {
    fontSize: 32,
    fontWeight: '700',
    marginVertical: 6,
    lineHeight: 48,
    color: COLORS.buttonText,
  },
  hello: {
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 24,
    color: COLORS.black,
    width: 191,
  },

  centerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    top: 20,
  },
  img: {
    width: 170,
    height: 130,
    resizeMode: 'cover',
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 40,
    color: COLORS.buttonText,
  },
  inputs: {
    width: '100%',
    height: 53,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderColor: COLORS.black,
    borderWidth: 1,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 22,
  },
  inputfocus: {
    width: '100%',
    fontSize: 14,
    fontWeight: '400',
  },
  forgot: {
    position: 'absolute',
    top: '100%',
    right: '0%',
    borderBottomWidth: 1,
    color: COLORS.buttonText,
    marginVertical: 5,
  },
  prev: {flexDirection: 'row', alignItems: 'center', marginTop: 35},
  orcontent: {
    flex: 1,
    height: 1,
    backgroundColor: COLORS.primary,
    marginHorizontal: 8,
  },
  midconatiner: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 8,
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
  primarytext: {
    position: 'absolute',
    bottom: 8,
  },
  textContent: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 21,
    textAlign: 'center',
  },
  imgleft: {
    position: 'absolute',
    left: 0,
    bottom: 0,
  },
  imgsvg: {
    width: 150,
    height: 100,
  },
  icons: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 35,
    paddingVertical: 10,
  },
  iconsu: {
    position: 'absolute',
    top: '45%',
    left: 6,
  },
});
