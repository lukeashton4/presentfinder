import React from "react";
import { StyleSheet, View, Button } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Text } from '../components/Themed';
import * as Google from "expo-google-app-auth";

const LoginScreen = ({ navigation }) => {
    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: "true",
            title: "Present Finder"
        });
    }, [navigation]);

  const signInAsync = async () => {
    console.log("logging in");
    try {
      const { type, user, accessToken } = await Google.logInAsync({
        iosClientId: "64030179714-0g10fchukhq08f5gabtblf92bfsj9rh1.apps.googleusercontent.com",
        androidClientId: "64030179714-0rjk9q83ff3o7b2f8bo9llrjnr5uoe8l.apps.googleusercontent.com",
      });

      if (type === "success") {
        // Then you can use the Google REST API
        console.log("success, navigating to root");
        navigation.navigate("Root", { user, accessToken });
      }
    } catch (error) {
      console.log("error logging in", error);
    }
  };

  return (
    <View style={styles.container}>
        <Text style={styles.text}>Welcome! Please Login</Text>
      <Button buttonStyle={styles.button} onPress={signInAsync} title="Login with Google" />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: 20,
    paddingLeft: 20,
    backgroundColor: "white"
  },
  button: {
      flex: 1,
  },
  text: {
      fontSize: 18,
      padding: 10
  }
});
