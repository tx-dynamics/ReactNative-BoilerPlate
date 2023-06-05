import React, { useContext, useState } from 'react'
import { View, Text, StatusBar } from 'react-native'
import { useDispatch } from 'react-redux';

import { routes } from '../../../services'
import { Header, MyInput } from '../../../components';
import { styles } from './styles';
import { userSave } from '../../../redux/Slices/splashSlice';
import themeContext from '../../../services/config/themeContext';
import Button from '../../../components/button';
import { isLoginValid } from '../../../services/validations';

const LoginScreen = ({ navigation }) => {
  const theme = useContext(themeContext)
  const dispatch = useDispatch()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const onPressLogin = () => {
    if (isLoginValid(email, password)) {
      dispatch(userSave(true))
      navigation.replace(routes.drawer)
    }
  }

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]} >
      <StatusBar backgroundColor={theme.background} barStyle={theme.theme === 'dark' ? 'light-content' : 'dark-content'} />
      <Header title={'Login '} />
      <View style={[styles.wrapper, { backgroundColor: theme.background }]}>
        <Text style={{ color: theme.color, fontSize: 20 }}>Login Screen</Text>
        <MyInput value={email} setValue={setEmail} placeholder={"Enter Email!"} />
        <MyInput value={password} setValue={setPassword} placeholder={"Enter Password!"} />
        <View style={{ paddingTop: 20 }}>
          <Button onPress={() => onPressLogin()}>Login</Button>
        </View>
        <View style={{ paddingTop: 20 }}>
          <Button onPress={() => navigation.navigate(routes.signup)}>Signup</Button>
        </View>
      </View>
    </View>
  )
}

export default LoginScreen