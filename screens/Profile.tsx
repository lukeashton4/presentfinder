
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import * as Google from "expo-google-app-auth";

const ProfileScreen = ({ route, navigation }) => {
  const { user, accessToken } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.details}>Your Details</Text>
      <Text>Name: {user.name}</Text>
      <Text>Email Address: {user.email}</Text>
      <Button
        title="Sign Out"
        onPress={() => signOut(navigation, accessToken)}
      />
    </View>
  );
};
export default ProfileScreen;

const signOut = async (navigation, accessToken) => {
  try {
    await Google.logOutAsync({
      accessToken: accessToken,
      iosClientId: "64030179714-0g10fchukhq08f5gabtblf92bfsj9rh1.apps.googleusercontent.com",
      androidClientId: "64030179714-0rjk9q83ff3o7b2f8bo9llrjnr5uoe8l.apps.googleusercontent.com",
    });
    navigation.navigate("Login", {})
  } catch (error) {
    console.error(error);
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    backgroundColor: 'white',
    padding: 15
  },
  details: {
    fontSize: 18
  }
});