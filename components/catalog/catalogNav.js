import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, AppState } from 'react-native';
import * as appStyles from '../styles/body.style'; 

export default function CatalogNav(props) {

	return (
		<View style={styles.container}>
			{props.catalogs && (
				props.catalogs.map(board => {
					<TouchableOpacity style={styles.button}>
            			<Text style={styles.fontColor}>{board}</Text>
          			</TouchableOpacity>;
				})
			)}
		</View>
	)
}

const styles = StyleSheet.create({
  container: {
    color: "white",
    backgroundColor: "gray",
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-around",
	},
	button: {
		padding: 20
	},
	fontColor: {
		color: appStyles.fontColor
	},
});

// TODO: ask save image to directory or default