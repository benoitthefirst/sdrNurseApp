import { Alert, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AuthHeaderComponent from '../../component/auth-header'
import AppButton from '../../component/app-button'
import { moderateScale, verticalScale } from '../../utils/metrics'
import EnteryInput from '../../component/entry-input'
import colors from '../../utils/colors'

const ResetPasswordScreen = ({ navigation }: any) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <AuthHeaderComponent
                title='Reset Password'
                desc='Hii Welcome Back 👋'
            />

            <View style={styles.container}>
                <EnteryInput
                    label='New Password'
                    placeholder='Enter New Password'
                />
                <EnteryInput
                    label='Confirm Password'
                    placeholder='Enter Confirm Password'
                />
                <AppButton
                    text={'Reset Password'}
                    onPress={() => { }}
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