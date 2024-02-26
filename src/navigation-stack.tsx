import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUpScreen from "./views/auth/signup-with-id";
import ForgotPasswordScreen from "./views/auth/forgot-password";
import ResetPasswordScreen from "./views/auth/reset-password";
import LoginScreen from "./views/auth/login-with-id";

const Stack = createNativeStackNavigator();

const AppNavigation = () => {

    const isAuthenticated = false;

    return (
        <NavigationContainer>
            <Stack.Navigator>
                {isAuthenticated ? (
                    <></>
                ) : (
                    <>
                        <Stack.Screen
                            name="Login"
                            component={LoginScreen}
                            options={{ headerShown: false }}
                        />
                        <Stack.Screen
                            name="Signup"
                            component={SignUpScreen}
                            options={{ headerShown: false }}
                        />
                        <Stack.Screen
                            name="ForgotPassword"
                            component={ForgotPasswordScreen}
                            options={{ headerShown: false }}
                        />
                        <Stack.Screen
                            name="ResetPassword"
                            component={ResetPasswordScreen}
                            options={{ headerShown: false }}
                        />
                    </>
                )}
            </Stack.Navigator>

        </NavigationContainer>
    )
}
export default AppNavigation;