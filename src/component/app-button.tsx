import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  ActivityIndicator,
  Image,
  ImageSourcePropType,
  DimensionValue,
} from 'react-native';
import {verticalScale, moderateScale, horizontalScale} from '../utils/metrics';
import colors from '../utils/colors';

type Variant = 'contained' | 'outlined' | 'text';
type Color = keyof typeof colors;

type AppButtonProps = {
  text: string;
  variant?: Variant;
  color?: Color;
  height?: DimensionValue | undefined;
  width?: DimensionValue | undefined;
  fullWidth?: boolean;
  startIcon?: ImageSourcePropType;
  endIcon?: ImageSourcePropType;
  isLoading?: boolean;
  disabled?: boolean;
  onPress: () => void;
};

const AppButton: React.FC<AppButtonProps> = ({
  variant = 'contained',
  color = 'primary',
  onPress,
  text,
  startIcon,
  endIcon,
  fullWidth,
  width = '100%',
  height = verticalScale(50),
  isLoading,
  disabled,
}) => {
  const getButtonStyle = (): ViewStyle => {
    switch (variant) {
      case 'outlined':
        return {
          borderColor: color ? colors[color] : 'transparent',
          borderWidth: 1,
          backgroundColor: 'transparent',
        };
      case 'text':
        return {
          borderColor: 'transparent',
          borderWidth: 0,
          backgroundColor: 'transparent',
        };
      default:
        return {
          borderColor: 'transparent',
          borderWidth: 0,
          backgroundColor: color ? colors[color] : colors.white,
        };
    }
  };

  const getTextStyle = () => {
    switch (variant) {
      case 'outlined':
        return {color: color === 'primary' ? colors.primary : colors.black};
      case 'text':
        return {color: color === 'primary' ? colors.primary : colors.black};
      default:
        return {color: color === 'primary' ? colors.white : colors.black};
    }
  };

  return (
    <TouchableOpacity
      style={[
        styles.iconBtn,
        getButtonStyle(),
        {width: fullWidth ? '100%' : width,height: height},
      ]}
      onPress={onPress}
      disabled={disabled}>
      {isLoading ? (
        <ActivityIndicator size="large" color="white" />
      ) : (
        <>
          {startIcon && (
            <Image
              style={[
                styles.btnIcon,
                {
                  tintColor:
                    variant === 'contained' ? colors.white : colors.primary,
                },
              ]}
              source={startIcon}
            />
          )}
          <Text style={[styles.iconText, getTextStyle()]}>
            {text}
          </Text>
          {endIcon && (
            <Image
              style={[
                styles.btnIcon,
                {
                  tintColor:
                    variant === 'contained' ? colors.white : colors.primary,
                },
              ]}
              source={endIcon}
            />
          )}
        </>
      )}
    </TouchableOpacity>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  iconBtn: {
    width: '50%',
    display: 'flex',
    flexDirection: 'row',
    borderRadius: moderateScale(16),
    padding: moderateScale(8),
    height: verticalScale(48),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: verticalScale(30),
    marginBottom: verticalScale(0),
  },
  iconText: {
    fontWeight: '800',
    textAlign: 'center',
    fontSize: moderateScale(12),
  },
  btnIcon: {
    width: horizontalScale(24),
    height: verticalScale(24),
    marginRight: horizontalScale(10),
  },
});
