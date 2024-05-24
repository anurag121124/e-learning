import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../Components/Header';
import { Button } from '@rneui/themed';
import { SvgXml } from 'react-native-svg';
import { useOAuth } from "@clerk/clerk-expo";
import { useWarmUpBrowser } from '../../hooks/useWarmUpBrowser';
const googleIcon = `
<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48">
    <path fill="#fbc02d" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
    <path fill="#e53935" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
    <path fill="#4caf50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
    <path fill="#1565c0" d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
</svg>
`;

export default function LoginScreenPage() {
    useWarmUpBrowser();
    const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });
    const onPress = React.useCallback(async () => {
        try {
          const { createdSessionId, signIn, signUp, setActive } =
            await startOAuthFlow();
    
          if (createdSessionId) {
            setActive({ session: createdSessionId });
          } else {
            // Use signIn or signUp for next steps such as MFA
          }
        } catch (err) {
          console.error("OAuth error", err);
        }
      }, []);
    



    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.loginContainer}>
                <Text style={styles.loginText}>Welcome to FuelBuddy</Text>
                <Text style={styles.bottomLoginText}>Doorstep Fuel Delivery</Text>
            </View>
            <View style={styles.loginButtonView}>
                <Button style={styles.button} buttonStyle={{
                    backgroundColor: '#0E2F34',
                }} onPress={onPress}>
                    <SvgXml xml={googleIcon} width={24} height={24} />
                    <Text style={styles.buttonTextButton}>Login with Google</Text>
                </Button>
            </View>

            <View style={styles.createNewAccount}>
                <Text style={styles.createNewAccountTextButton}>
                    New here?
                    <Text style={styles.createNewAccountText}> Create New Account</Text>
                </Text>


            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    loginText: {
        fontSize: 24,
        color: 'black',
        fontWeight: 'bold',
    },
    loginContainer: {
        alignItems: 'center',
        marginTop: 60,
    },
    bottomLoginText: {
        fontSize: 16,
        color: 'gray',
        marginTop: 10
    },
    loginButtonView: {
        alignItems: 'center',
        marginTop: 10,

    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#0E2F34',
        borderRadius: 20,

    },
    buttonText: {
        marginLeft: 10,
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black'
    }
    , buttonTextButton: {
        marginLeft: 10,
        fontSize: 16,
        color: 'white'

    },
    createNewAccount: {
        flexDirection: 'row',
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        marginTop: 170
    },
    createNewAccountText: {
        fontSize: 16,
        color: '#44B877',
        fontWeight: 'bold',


    },
    createNewAccountTextButton: {
        fontSize: 16,
        color: '#333333',


    },
});
