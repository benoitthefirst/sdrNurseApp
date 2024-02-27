import {
    Text,
    View,
    StyleSheet,
} from 'react-native'
import React from 'react'
import { moderateScale, verticalScale } from '../utils/metrics'

const AuthHeaderComponent = ({title, desc}:any) => {
    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>{title}</Text>
            <Text style={styles.descText}>{desc}</Text>
        </View>
    )
}

export default AuthHeaderComponent

const styles = StyleSheet.create({
    container: {
        height: verticalScale(200),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#3513DD',
    },
    titleText: {
        fontSize: moderateScale(24),
        fontFamily: '',
        color: '#FFFFFF',
        fontWeight: '700'
    },
    descText: {
        fontSize: moderateScale(14),
        fontFamily: '',
        color: '#FFFFFF',
        marginTop: verticalScale(6),
        fontWeight: '400'
    }
})