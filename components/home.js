import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, AsyncStorage } from "react-native";
import * as appStyles from './styles/body.style';
import Catalog from './catalog/catalog';

// get favorite boards else default

export default function Home() {
	const [favoriteBoards, SetFavoriteBoards] = useState([]);

	useEffect(() => {
		// async storage favorite boards
		// fetch first board in array or HOME board
		if (favoriteBoards.length === 0) {
			
    	}

    return () => {};
  }, [favoriteBoards.length]);

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
    backgroundColor: appStyles.BaseColor,
  },
  textStyle: {
    color: appStyles.primaryFontColor,
  },
});