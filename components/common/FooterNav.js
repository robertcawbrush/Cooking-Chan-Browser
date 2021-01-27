import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import * as RootNavigation from "../../RootNavigation";

export default function FooterNav() {
	return (
		<View style={styles.nav}>
			<TouchableOpacity style={styles.button}>
				<Text>Boards</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	nav: {
		width: '100%',
		justifyContent: 'center'
	},
	button: {
		padding: 20
	}
});