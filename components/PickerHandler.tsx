import * React from "react";
import { View, Picker, StyleSheet } from "react-native";

const PickerHandler = () => {
    return (
        <View style={styles.rowContainer}>
            <Text style={styles.text}>Hi</Text>
            <TextInput
                placeholder="Type here to translate!"
                defaultValue="Hi"
                style={styles.textInput}
            />
        </View>
    );
}