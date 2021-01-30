import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Thread() {
	//Gets all posts in one Thread

	return (
		<View style={styles.container}>
			<Text>I am Thread</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	{
	container: {
		color: 'white',
		backgroundColor: 'gray',
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
  },
}
});