import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import Board from './board/board';

export default function Catalog(props) {
	return (
    <View style={styles.container}>
      <FlatList
        data={props.boards}
        renderItem={Board}
        keyExtractor={(item) => item.board}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
		width: "100%",
	  flex: 1,
	alignItems: "stretch",
	justifyContent: 'center',
    flexDirection: "column",
  },
});