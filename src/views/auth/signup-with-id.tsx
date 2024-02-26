import { Alert, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AuthHeaderComponent from '../../component/auth-header'
import AppButton from '../../component/app-button'
import { moderateScale, verticalScale } from '../../utils/metrics'
import EnteryInput from '../../component/entry-input'
import colors from '../../utils/colors'

const SignUpScreen = ({navigation}:any) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <AuthHeaderComponent
        title='Sign up'
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
        <AppButton
          text={'Sign Up'}
          onPress={() => {}}
        />
        <Text style={styles.alreadySignIn}>Already Have an account?
          <Text style={styles.signIn} onPress={()=>navigation.navigate('Login')}> Sign in</Text>
        </Text>
      </View>
    </SafeAreaView>
  )
}

export default SignUpScreen

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