import React from 'react';
import { View, Text, StyleSheet } from "react-native";
import * as appStyles from './styles/body.style';

// get favorite boards else default

export default function Home() {
	return (
		<View style={styles.container}>
			<Text style={styles.textStyle}>I am home</Text>
    	</View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: appStyles.primaryColor
	},
	textStyle: {
		color: appStyles.fontColor
	}
});