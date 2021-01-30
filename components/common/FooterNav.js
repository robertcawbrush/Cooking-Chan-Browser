import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import * as RootNavigation from "../../RootNavigation";
import * as appStyles from "../styles/body.style";
import * as routeConstants from '../../constants/routeConstants';

//TODO: hide show remove seen if on managementBoard, maybe use nav.current
export default function FooterNav() {
	return (
    <View style={styles.nav}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => RootNavigation.navigate(routeConstants.BOARD_MANAGEMENT)}
      >
        <Text style={styles.buttonText}>Boards</Text>
      </TouchableOpacity>
			{RootNavigation.navigationRef?.current?.getCurrentRoute().name ===
				routeConstants.HOME && (
					<TouchableOpacity
						style={styles.button}
						onPress={() => console.log("Refresh pressed")}
					>
						<Text style={styles.buttonText}>Refresh</Text>
					</TouchableOpacity>
				)} 
        <TouchableOpacity
          style={styles.button}
          onPress={() => RootNavigation.navigate(routeConstants.HOME)}
        >
          <Text style={styles.buttonText}>Home</Text>
        </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => console.log("Remove Seen pressed")}
      >
        <Text style={styles.buttonText}>Remove Seen</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  nav: {
    width: "100%",
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: appStyles.SurfaceColor,
    borderTopColor: appStyles.OverlayColorDark,
    borderTopWidth: 2,
    borderStyle: "solid",
  },
  button: {
    padding: 20,
  },
  buttonText: {
    color: appStyles.primaryFontColor,
  },
});