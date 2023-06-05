import React, { useContext, useState } from 'react'
import { View, Text, StatusBar } from 'react-native'
import { useDispatch } from 'react-redux';

import { routes } from '../../../services'
import { Header, MyInput } from '../../../components';
import { styles } from './styles';
import { userSave } from '../../../redux/Slices/splashSlice';
import themeContext from '../../../services/config/themeContext';
import Button from '../../../components/button';
import { isSignupValid } from '../../../services/validations';

const SignupScreen = ({ navigation }) => {
  const theme = useContext(themeContext)
  const dispatch = useDispatch()
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const onPressSignup = () => {
    if (isSignupValid(name, email, password, confirmPassword)) {
      dispatch(userSave(true))
      navigation.replace(routes.drawer)
    }
  }

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]} >
      <StatusBar backgroundColor={theme.background} barStyle={theme.theme === 'dark' ? 'light-content' : 'dark-content'} />
      <Header title={'Signup '} />
      <View style={[styles.wrapper, { backgroundColor: theme.background }]}>
        <Text style={{ color: theme.color, fontSize: 20 }}>Signup Screen</Text>
        <MyInput value={name} setValue={setName} placeholder={"Enter Name!"} />
        <MyInput value={email} setValue={setEmail} placeholder={"Enter Email!"} />
        <MyInput value={password} setValue={setPassword} placeholder={"Enter Password!"} />
        <MyInput value={confirmPassword} setValue={setConfirmPassword} placeholder={"Enter Confirm Password!"} />
        <View style={{ paddingTop: 20 }}>
          <Button onPress={() => onPressSignup()}>Signup</Button>
        </View>
        <View style={{ paddingTop: 20 }}>
          <Button onPress={() => navigation.navigate(routes.login)}>Login</Button>
        </View>
      </View>
    </View>
  )
}

export default SignupScreen