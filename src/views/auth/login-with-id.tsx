import { Alert, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import AuthHeaderComponent from '../../component/auth-header'
import AppButton from '../../component/app-button'
import { moderateScale, verticalScale } from '../../utils/metrics'
import EnteryInput from '../../component/entry-input'
import colors from '../../utils/colors'

const LoginScreen = ({ navigation }: any) => {

  const [id, setID] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [secureTextEntry, setSecureTextEntry] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const loginMethod = () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      if (id === 'gulshan123@gmail.com' && password === '123456') {
        navigation.navigate('Dashboard');
        setID('');
        setPassword('')
      } else {
        Alert.alert('Id or password wrong')
      }
    }, 2000);

  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.white }}>
        <AuthHeaderComponent
          title='Sign in'
          desc='Hii Welcome Back 👋'
        />
      <View style={styles.container}>
        <EnteryInput
          label='ID/ Passport'
          placeholder='Enter ID/ Passport'
          onChange={(text) => setID(text)}
          value={id}
        />
        <EnteryInput
          label='Password'
          placeholder='Enter Password'
          onChange={(text) => setPassword(text)}
          value={password}
          secureTextEntry={secureTextEntry}
          rightIcon={
            <TouchableOpacity
              onPress={() => setSecureTextEntry(!secureTextEntry)}
            >
              <Image
                source={require('../../assets/eye.png')}
              />
            </TouchableOpacity>
          }
        />
        <Text onPress={() => navigation.navigate('ForgotPassword')} style={styles.forgotPassword}>Forgot Password?</Text>
        <AppButton
          isLoading={isLoading}
          text={'Log In'}
          onPress={() => loginMethod()}
        />
        <Text style={styles.alreadySignIn}>don't Have an account?
          <Text style={styles.signIn} onPress={() => navigation.navigate('Signup')}> Sign up</Text>
        </Text>
      </View>
    </SafeAreaView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: moderateScale(24),
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    color: colors.primary,
    fontWeight: '600',
    marginTop: moderateScale(8)
  },
  alreadySignIn: {
    alignSelf: 'center',
    marginTop: verticalScale(6),
    color: '#1B254B',
  },
  signIn: {
    alignSelf: 'flex-end',
    color: colors.primary,
  }
})