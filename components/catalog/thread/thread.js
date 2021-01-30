import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Thread(props) {
	return (
		<View style={styles.container}>
			<Text>I am thread</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		color: 'white',
		backgroundColor: 'gray',
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
  },
});

// TODO: ask save image to directory or default