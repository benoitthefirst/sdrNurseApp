import React from 'react';
import {KeyboardTypeOptions, StyleSheet, Text, TextInput, View} from 'react-native';
import {verticalScale, moderateScale, horizontalScale} from '../utils/metrics';

type EntryProps = {
  id?: string;
  value?: string;
  label?: string;
  keyboardType?: KeyboardTypeOptions;
  placeholder?: string;
  onChange?: (value: string) => void;
  rightIcon?: JSX.Element;
  secureTextEntry?: boolean;
};
export default function EnteryInput({
  id,
  value,
  label,
  keyboardType,
  placeholder,
  onChange,
  rightIcon,
  secureTextEntry
}: EntryProps) {
  return (
    <>
      {label && <Text style={styles.inputLabel}>{label}</Text>}

      <View style={styles.inputView}>
        <TextInput
          value={value}
          style={styles.inputText}
          keyboardType={keyboardType}
          inputAccessoryViewID={id}
          secureTextEntry={secureTextEntry}
          placeholder={placeholder}
          onChangeText={onChange}
        />
        {rightIcon && rightIcon}        
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  inputLabel: {
    color: '#1B254B',
    fontFamily: 'Source Sans Pro',
    fontSize: moderateScale(12),
    fontStyle: 'normal',
    fontWeight: '400',
    textAlign: 'left',
    lineHeight: verticalScale(20),
    letterSpacing: 0.3,
    marginBottom: verticalScale(8),
    marginTop: verticalScale(24),
  },
  inputView: {
    width: '100%',
    backgroundColor: '#ffffff',
    borderRadius: moderateScale(16),
    borderWidth: 0.5,
    borderColor: 'lightGrey',
    height: verticalScale(50),
    alignItems:'center',
    justifyContent: 'space-between',
    padding: 0,
    paddingHorizontal: horizontalScale(10),
    flexDirection:'row',
  },
  inputText: {
    fontFamily: 'Source Sans Pro',
    fontSize: moderateScale(14),
    fontWeight: '400',
    fontStyle: 'normal',
    lineHeight: moderateScale(14),
    color: '#636363',
  },
});
