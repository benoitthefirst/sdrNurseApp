import { Alert, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import AuthHeaderComponent from '../../component/auth-header'
import AppButton from '../../component/app-button'
import { moderateScale, verticalScale } from '../../utils/metrics'
import EnteryInput from '../../component/entry-input'

const ResetPasswordScreen = ({ navigation }: any) => {

    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);

    const resetPassword = () => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            if (password === confirmPassword) {

                navigation.navigate('Login')
            } else {
                Alert.alert('password is not matching')
            }
        }, 2000);
    }
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <AuthHeaderComponent
                title='Reset Password'
                desc='Hii Welcome Back 👋'
            />

            <View style={styles.container}>
                <EnteryInput
                    label='New Password'
                    placeholder='Enter New Password'
                    onChange={text => setPassword(text)}
                    value={password}
                />
                <EnteryInput
                    label='Confirm Password'
                    placeholder='Enter Confirm Password'
                    onChange={text => setConfirmPassword(text)}
                    value={confirmPassword}
                />
                <AppButton
                    text={'Reset Password'}
                    isLoading={loading}
                    onPress={() => resetPassword()}
                />
            </View>
        </SafeAreaView>
    )
}

export default ResetPasswordScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: moderateScale(24),
    }
})