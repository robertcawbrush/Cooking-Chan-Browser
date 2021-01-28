import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import Board from './board/board';
import * as appStyles from "../styles/body.style";

export default function Boards(props) {
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
    justifyContent: "center",
    flexDirection: "column",
    backgroundColor: appStyles.BaseColor,
  },
});