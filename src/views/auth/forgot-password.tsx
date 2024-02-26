import { Alert, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AuthHeaderComponent from '../../component/auth-header'
import AppButton from '../../component/app-button'
import { moderateScale, verticalScale } from '../../utils/metrics'
import EnteryInput from '../../component/entry-input'
import colors from '../../utils/colors'

const ForgotPasswordScreen = ({navigation}:any) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <AuthHeaderComponent
                title='Forgot Password'
                desc='Hii Welcome Back 👋'
            />
            <View style={styles.container}>
                <EnteryInput
                    label='Email/SANC'
                    placeholder='Enter Email/ SANC'
                />
                <AppButton
                    text={'Confirm'}
                    onPress={()=>navigation.navigate('ResetPassword')}
                />
            </View>
        </SafeAreaView>
    )
}

export default ForgotPasswordScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: moderateScale(24),
    }
})