import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import SideBar from './components/SideBar';
import Container from './components/Container';
import EditText from './components/EditText';
import Footer from './components/Footer';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}></View>
        <View style={styles.content}>
          <View style={styles.left}>
            <SideBar />
          </View>
          <View style={styles.right}>
            <Container />
          </View>
        </View>
        <View style={styles.editText}>
          <EditText />
        </View>
        <View style={styles.footer}>
          <Footer />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flex: 5
  },
  content: {
    flex: 85,
    flexDirection: 'row'
  },
  left: {
    flex: 20
  },
  right: {
    flex: 80
  },
  editText: {
    flex: 10,
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10
  },
  footer: {
    flex: 10,
    padding: 10
  }
});