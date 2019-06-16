import React, { Component } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  TextInput,
  Platform,
  StatusBar
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

class Explore extends Component {
  componentWillMount() {
    this.startHeaderHeight = 80;
    if (Platform.OS == 'android') {
      this.startHeaderHeight = 100 + StatusBar.currentHeight
    }
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <View
            style={{
              height: this.startHeaderHeight,
              backgroundColor: "white",
              borderBottomWidth: 1,
              borderBottomColor: "#dddddd"
            }}
          >
            <View
              style={{
                flexDirection: "row",
                padding: 10,
                backgroundColor: "white",
                marginHorizontal: 20,
                shadowColor: "black",
                shadowOffset: { width: 0, height: 0 },
                shadowOpacity: 0.2,
                elevation: 1,
                marginTop: Platform.OS == "android" ? 30 : null
              }}
            >
              <Ionicons name="ios-search" size={20} style={{ marginRight: 10 }}/>
              <TextInput
                underlineColorAndroid="transparent"
                placeholder="Try New Delhi"
                placeholderTextColor="grey"
                style={{ flex: 1, fontWeight: '700', backgroundColor: 'white' }}
              />
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

export default Explore;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center"
  }
});
