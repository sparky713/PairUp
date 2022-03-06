import { StatusBar } from "expo-status-bar";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
  SafeAreaView
} from "react-native";
import * as React from "react";
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';


export default SignUp = ({ navigation }) => {
  return (
    // <KeyboardAwareScrollView
    //     style={{ flex: 1 }}
    //   >
    <SafeAreaView style={styles.container}>
      <Image source={require('../asset/Images/Logo.png')} 
      style={styles.logo}/>
      <Text style={styles.title}>Sign Up</Text>
      <TextInput
        placeholder={"Username"}
        placeholderTextColor="#FFF"
        style={styles.input1}
      />
      <TextInput
        placeholder={"Password"}
        placeholderTextColor="#FFF"
        style={styles.input2}
      />
      <TouchableOpacity style={styles.forgotpw}>
        <Text style={styles.forgotpw}> Forgot password?</Text></TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.logintext}>Login</Text>
      </TouchableOpacity>
      <Text 
      fontStyle="italic"
      style={styles.makeacc}> Don't have an account yet? 
      <TouchableOpacity>
        <Text style={styles.gotosignup}>Sign up</Text>
        </TouchableOpacity>
      </Text>
    </SafeAreaView>
    // </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    overflow: "hidden",
    backgroundColor: "#7E9C83",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  gotosignup: {
    
    width: "auto",
    height: "auto",
    fontSize: 13,
    textDecorationLine: "underline",
    color: "#035352",
    fontWeight: "bold",
  },
  logo: {
    position: "absolute",
    width: 91.63,
    height: 131.8,
    top: 70,
  },
  makeacc: {
    position: "absolute",
    width: "auto",
    height: "auto",
    top: 668,

    // font-family: Montserrat;
    fontSize: 13,
    textAlign: "center",
    fontWeight: "bold",

    color: "#035352",
  },
  title: {
    color: "#2D5500",
    position: "absolute",
    width: "auto",
    height: "auto",
    textAlign: "center",
    textAlignVertical: "top",
    letterSpacing: 0.1,
    
    top: 251,

    // font-family: Montserrat;
    fontWeight: "bold",
    fontSize: 30,
  },
  input1: {
    position: "relative",
    
    color: "white",
    height: 42,
    width: "65%",
    borderBottomWidth: 1,
    borderColor: "white",
    marginTop: 70,
  },
  input2: {
    position: "relative",
    
    color: "white",
    height: 42,
    width: "65%",
    borderBottomWidth: 1,
    borderColor: "white",
    marginVertical: 10,
  },
  forgotpw: {
    position: "relative",
    color: "#035352",
    display: "flex",
    width: "65%",
    textAlign: "left",
    marginTop: 3,
    fontSize: 13,
    fontWeight: "bold",
  },
  button: {
    position: "relative",
    width: "70%",
    height: 39,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 60,
    borderRadius: 17.5,

    backgroundColor: "#547234",
  },
  logintext: {
    color: "white",
    // fontFamily: "Montesserat",
    fontWeight: "bold",
    backgroundColor: "transparent",
  },
});
