import { Alert, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AuthHeaderComponent from '../../component/auth-header'
import AppButton from '../../component/app-button'
import { moderateScale, verticalScale } from '../../utils/metrics'
import EnteryInput from '../../component/entry-input'
import colors from '../../utils/colors'

const LoginScreen = ({navigation}:any) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <AuthHeaderComponent
        title='Sign in'
        desc='Hii Welcome Back 👋'
      />

      <View style={styles.container}>
        <EnteryInput
          label='ID/ Passport'
          placeholder='Enter ID/ Passport'
        />
        <EnteryInput
          label='Password'
          placeholder='Enter Password'
        />
        <Text onPress={()=>navigation.navigate('ForgotPassword')} style={styles.forgotPassword}>Forgot Password?</Text>
        <AppButton
          text={'Log In'}
          onPress={() => {}}
        />
        <Text style={styles.alreadySignIn}>don't Have an account?
          <Text style={styles.signIn} onPress={()=>navigation.navigate('Signup')}> Sign up</Text>
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