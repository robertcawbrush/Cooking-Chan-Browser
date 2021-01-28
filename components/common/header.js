import React, {useRef} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Platform } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";
import * as appStyles from '../styles/body.style';

// TODO: fix the header printing in the status bar 
export default function Header(props) {

	return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>
        {props.currentBoard ? props.currentBoard : null}
      </Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Platform.OS === "android" ? getStatusBarHeight() : null,
    height: Platform.OS === "android" ? 54 + getStatusBarHeight() : null,
  },
  textStyle: {
    color: appStyles.fontColor,
  },
});