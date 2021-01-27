import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// TODO: fix the header printing in the status bar 
export default function Header(props) {
	return (
    <View style={styles.container}>
      <Text>{props.CurrentBoard ? props.CurrentBoard : "header"}</Text>
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