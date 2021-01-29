import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { Platform } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";
import * as appStyles from '../styles/body.style';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import CurrentBoardContext from './commonContext';

// TODO: fix the header printing in the status bar 
export default function Header(props) {

	const currentBoard = useContext(CurrentBoardContext);
	console.log('curBord', currentBoard);

	return (
    <View style={styles.container}>
      <TouchableWithoutFeedback
        onPress={() => {
          console.log("open hamburger");
        }}
      >
        <Text style={styles.hamburger}>
          <MaterialCommunityIcons
            name="forwardburger"
            size={50}
            color={appStyles.WarningColor}
          />
        </Text>
      </TouchableWithoutFeedback>
      <Text style={styles.headerText}>
        {props.headerDisplay ? props.headerDisplay : currentBoard}
      </Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appStyles.SurfaceColor,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 54 + getStatusBarHeight(),
  },
  headerText: {
	  color: appStyles.primaryFontColor,
	  flex: 10
  },
  hamburger: {
	  flex: 2,
  },
});