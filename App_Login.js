import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Image, TouchableOpacity, TextInput, Alert } from 'react-native';
import { Button } from "react-native-paper";
import Employee from "./Server/Employee";
import { emailValidator, passwordValidator } from './utils';


const App_Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')

  const submitData = () => {


    fetch("http://10.0.2.2:3000/send-data", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({

        email: email,
        password: password
      })
    }).then(res => res.json())
      .then(data => {
        console.log(data)
      })
      .catch(err => {
        console.log("error", err)
      })
  }

  return (

    <View>

      <View style={styles.logoContiner}>
        <Image style={styles.logo}
          source={require('./images/logo.png')} />
      </View>
      <View style={styles.container}>

        <Text style={styles.welcome}>WELCOME</Text>
        <View style={{ height: 30 }} />

        <View style={styles.emailContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Email"
            value={email}

            label='Email'
            onChangeText={text => setEmail(text)}
          />
        </View>
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Password"
            secureTextEntry={true}
            label='password'
            value={password}
            onChangeText={text => setPassword(text)}
          />
        </View>

        <TouchableOpacity>
          <View style={styles.forgotPassword}>
            <Text style={styles.forgotText}>Forgot password?</Text>
          </View>
        </TouchableOpacity>


        <Button
          icon="content-save"
          mode="contained"
          style={styles.button}

          onPress={() => submitData()}>
          Sign up
      </Button>

      </View>
      <View style={styles.normalContainer}>
        <Text style={styles.normalText}>Do not have account?</Text>
      </View>
      <TouchableOpacity>

        <View style={styles.createAccount}>


          <Button
            textAlign='center'
            color='#00ffff'

            onPress={() => this.props.navigation.navigate('Find_Institute')}

          >
            <Text style={styles.createText} >Create new Account</Text>

          </Button>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {

    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: 1,
    paddingTop: 50
  },
  logo:{
    width: 300,
    height: 200,
    resizeMode: 'contain',
    justifyContent: 'center',
    alignItems: 'center'
  },
  forgotPassword: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
    height: 30,
    alignItems: 'flex-end',
  },
  createAccount:
  {

    width: "22%",
    //alignItems:'center',
    //borderWidth:4,
    marginLeft: 600,

    alignContent: 'center',
    height: 40,

  },
  normalContainer:
  {
    alignContent: 'center',
    height: 20,
    height: 30,
    alignItems: 'center',
    marginTop: 10

  },
  normalText: {
    color: '#5B5A5A',
    fontSize: 12,
    alignItems: 'center',
    textAlign: 'center',
    width: 330,
    flexDirection: 'column'
  },
  createText: {
    color: '#FF7260',
    fontSize: 9,
    alignItems: 'center',
    textAlign: 'center',
    width: 330,
  },
  forgotText: {
    color: '#5B5A5A',
    fontSize: 12,
    alignItems: 'flex-end',
    textAlign: 'right',
    width: 330,
  },
  logoContiner: {
    height: 170,
    flexDirection: 'row',
    justifyContent: 'center',
    textAlign: 'center'
  },
  welcome: {
    fontSize: 25,
    color: '#5B5A5A',
    letterSpacing: 6
  },
  textInput: {
    color: '#989899',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 14,
  },
  button: {
    width: 325,
    borderColor: '#129793',
    borderWidth: 1,
    height: 50,
    padding: 10,
    borderRadius: 0,
    marginTop: 20,
    backgroundColor: '#1DDCAF',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#129793',
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 5,
    shadowOpacity: 0.8
  },
  buttonText: {
    color: 'white',
    fontSize: 12,


  },
  emailContainer: {
    width: 325,
    borderColor: '#CFD0D1',
    borderWidth: 1,
    height: 50,
    padding: 10,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderBottomWidth: 0,
    backgroundColor: '#F5F6F7'
  },
  passwordContainer: {
    width: 325,
    borderColor: '#CFD0D1',
    borderWidth: 1,
    height: 50,
    padding: 10,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    backgroundColor: '#F5F6F7'

  }

})
export default App_Login;