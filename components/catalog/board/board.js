import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

export default function Board({item}) {

	return (
		<TouchableOpacity style={styles.container}>
			<View style={styles.listing}>
				<Text>
				{"/" + item?.board + "/"} - {item?.title}
				</Text>
			</View>
    	</TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    padding: 5,
	backgroundColor: "#fff",
	color: 'black'
  },
  listing: {
    paddingTop: 25,
	paddingBottom: 25,
	paddingLeft: 10,
	paddingRight: 10,
	borderWidth: 1,
	borderColor: 'black',
	  borderStyle: "solid",
	borderRadius: 4
  },
});