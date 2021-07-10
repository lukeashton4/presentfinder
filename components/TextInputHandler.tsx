import * as React from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { Text, View } from '../components/Themed';

const TextInputHandler = () => {
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