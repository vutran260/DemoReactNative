import React, { Component } from 'react';
import { Image, StyleSheet, View } from 'react-native';

export default class Robot extends Component {
    render(){
        const imageSource = {
            uri: "https://images-na.ssl-images-amazon.com/images/I/513SMv7R-0L._SY606_.jpg"
        }
        return (
            <View style={styles.container}>
                <Image 
                    source={imageSource}
                    style={styles.image}    
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15
    },
    image: {
        flex: 100,
        borderWidth: 1,
        borderColor: '#000000',
        borderRadius: 4
    }
});