import React, { Component } from 'react';
import { TextInput, StyleSheet, View } from 'react-native';

export default class EditText extends Component {
    render(){
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Type text here"
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#000000',
        borderRadius: 4
    },
    textInput: {
        flex: 100,
        padding: 5
    }
});