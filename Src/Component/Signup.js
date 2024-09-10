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
import Maskgroup1 from '../images/Maskgroup1.png';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import CheckBox from 'react-native-check-box';

const Signup = ({navigation}) => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleRegister = async () => {
    try {
      const response = await fetch('https://tor.appdevelopers.mobi/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          phone: phone,
          password: password,
          name: name,
        }),
      });
      const result = await response.json();
      if (result.status) {
        Alert.alert('Success', 'User signup successfully');
        navigation.navigate('Signin');  
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
          <Image source={Maskgroup1} resizeMode="cover" style={styles.imgsvg} />
        </View>

        <View style={{flex: 1, marginHorizontal: 20}}>
          <View >
            <Text style={styles.content}>Sign Up</Text>
            <Text style={styles.hello}>
              {' '}
              Fill in the below form and add life to your car!{' '}
            </Text>
          </View>

          <View style={{position: 'relative'}}>
            <Text style={styles.label}>Name</Text>

            <View style={styles.inputs}>
              <Feather
                name="user"
                color={COLORS.textcolor}
                style={styles.iconsu}
                size={15}
              />
              <TextInput
                placeholder="Enter your name"
                placeholderTextColor={COLORS.textcolor}
                keyboardType="default"
                style={styles.inputfocus}
                value={name}
                onChangeText={(name)=> setName(name)}
              />
            </View>
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
                placeholder="Enter phone number"
                placeholderTextColor={COLORS.textcolor}
                keyboardType="number-pad"
                style={styles.inputfocus}
                value={phone}
                onChangeText={(phone)=> setPhone(phone)}
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
                secureTextEntry={isPasswordShown}
                style={styles.inputfocus}
                value={password}
                onChangeText={(password)=> setPassword(password)}
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
          </View>

          <View style={{flexDirection: 'row', paddingTop: 5}}>
            <CheckBox
              value={isChecked}
              onValueChange={() => setIsChecked(!isChecked)}
              color={isChecked ? COLORS.primary : undefined} 
             
            />
            <Text
              style={{
                paddingLeft: 15,
                fontSize: 16,
                fontWeight: '600',
                color: COLORS.buttonText,
              }}>
              Agree with{' '}
            </Text>
            <Text style={styles.termsCondition}>Terms & condition</Text>
          </View>
          <View style={{flexDirection:"row",justifyContent:"center"}}>
          <PrimaryButton
            onPress={handleRegister}
            title="Sign up"
            filled
          />
          </View>
<         View style={styles.midconatiner}>
          <Text style={styles.textaccount}>Already have an account?</Text>
          <TouchableOpacity
          onPress={() => navigation.navigate("Signin")}
          >
            <Text style={styles.signin}>Sign In</Text>
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

export default Signup;

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
    width: 288,
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
  midconatiner: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical:40
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
    right: 0,
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
  termsCondition: {
    borderBottomWidth: 1,
  },
});
