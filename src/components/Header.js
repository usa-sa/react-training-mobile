import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import Expo from "expo";
const styles = StyleSheet.create({
  header: {
    backgroundColor: "pink",
    height: 50,
    marginTop: Expo.Constants.statusBarHeight,
    justifyContent: "center"
  },
  textColor: {
    color: "#fff",
    padding: 5,
    fontSize: 20
  }
});

class Header extends Component {
  render() {
    return (
      <View style={styles.header}>
        <Text style={styles.textColor}>Todo List:: </Text>
      </View>
    );
  }
}

export default Header;
