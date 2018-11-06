import React, { Component } from 'react';
import { Alert, View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import { ShareDialog } from 'react-native-fbsdk';

export default class Footer extends Component {
    
    _onPressButton(type) {
        if (type == 'save') {
            Alert.alert('You tapped the button ' + type)
        }
        else if (type == 'share') {
            const sharePhotoContent = {
                contentType: 'link',
                contentUrl: "https://images-na.ssl-images-amazon.com/images/I/513SMv7R-0L._SY606_.jpg",
                contentDescription: 'Facebook sharing is easy!'
            };
            ShareDialog.canShow(sharePhotoContent)
            .then(
                function(canShow) {
                    if (canShow) {
                        return ShareDialog.show(sharePhotoContent);
                    }
                }).then(
                    function(result) {
                        if (result && result.isCancelled) {
                            Alert.alert('Share cancelled');
                        } else {
                            Alert.alert('Share successfully');
                        }
                    },
                    function(error) {
                        Alert.alert('Share fail with error: ' + error);
                    }
                );
        }
    }

    render(){
        return (
            <View style={styles.container}>
                <TouchableHighlight onPress={() => this._onPressButton('save')} underlayColor="white" style={styles.buttonWrap}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Save</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight onPress={() => this._onPressButton('share')} underlayColor="white" style={styles.buttonWrap}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Share</Text>
                    </View>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonWrap: {
        flex: 10,
    },
    button: {
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#000000',
        borderRadius: 4
    },
    buttonText: {
        padding: 10,
        fontWeight: 'bold',
        color: '#000000'
    }
});