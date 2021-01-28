import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import * as RootNavigation from "../../RootNavigation";
import * as appStyles from "../styles/body.style";
import * as routeConstants from '../../constants/routeConstants';

//TODO: hide show remove seen if on managementBoard, maybe use nav.current
export default function FooterNav() {
	return (
    <View style={styles.nav}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Refresh</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Remove Seen</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => RootNavigation.navigate(routeConstants.BOARD_MANAGEMENT)}
      >
        <Text style={styles.buttonText}>Boards</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  nav: {
    width: "100%",
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: appStyles.primaryColorLight,
    borderTopColor: "black",
    borderTopWidth: 2,
    borderStyle: "solid",
  },
  button: {
    padding: 20,
  },
  buttonText: {
    color: appStyles.fontColor
  },
});