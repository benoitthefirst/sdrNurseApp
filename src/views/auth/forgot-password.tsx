import { Alert, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import AuthHeaderComponent from '../../component/auth-header'
import AppButton from '../../component/app-button'
import { moderateScale, verticalScale } from '../../utils/metrics'
import EnteryInput from '../../component/entry-input'
import colors from '../../utils/colors'

const ForgotPasswordScreen = ({ navigation }: any) => {

    const [id, setId] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);

    const forgotMethod = () => {
        setLoading(true )
        setTimeout(() => {
            setLoading(false)
            if (id.length >= 0) {
                navigation.navigate('ResetPassword')
            } else {
                Alert.alert('please Enter ID')
            }
        }, 2000);
    }
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <AuthHeaderComponent
                title='Forgot Password'
                desc='Hii Welcome Back 👋'
            />
            <View style={styles.container}>
                <EnteryInput
                    label='Email/SANC'
                    placeholder='Enter Email/ SANC'
                    onChange={(text) => setId(text)}
                    value={id}
                />
                <AppButton
                    text={'Confirm'}
                    isLoading={loading}
                    onPress={() => forgotMethod()}
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