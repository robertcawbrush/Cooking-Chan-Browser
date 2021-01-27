import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';

export default function Catalog(props) {

	const singleBoard = ({ item }) => {
		return (
			<View>
				<Text>Board</Text>
				{/* <Text>
					{"/" + item.board + "/"} - {item.title}
				</Text> */}
			</View>
		)
	};

	return (
    <View style={styles.container}>
        <FlatList
          data={props.boards}
          component={singleBoard}
          keyExtractor={(board) => board.title}
        ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
	alignItems: "flex-start",
	justifyContent: 'center',
    flexDirection: "column",
  },
});