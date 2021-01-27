import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Header(props) {
	return (
    <View style={styles.container}>
      <Text>{props.CurrentBoard}</Text>
      <Text>"header"</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
	},
	
});