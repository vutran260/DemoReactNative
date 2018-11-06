import React, { Component } from 'react';
import { Alert, View, Text, StyleSheet, TouchableHighlight } from 'react-native';

export default class SideBar extends Component {
    _onPressButton(type) {
        Alert.alert('You tapped the button ' + type);
    }

    render(){
        return (
            <View style={styles.container}>
                <TouchableHighlight onPress={() => this._onPressButton('image')} underlayColor="white">
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Image</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight onPress={() => this._onPressButton('frame')} underlayColor="white">
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Frame</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight onPress={() => this._onPressButton('text')} underlayColor="white">
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Text</Text>
                    </View>
                </TouchableHighlight>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        marginBottom: 10,
        width: 260,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#000000',
        borderRadius: 4
      },
    buttonText: {
        padding: 20,
        fontWeight: 'bold',
        color: '#000000'
    }
});