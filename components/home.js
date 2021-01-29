import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  ToastAndroid,
} from "react-native";
import AsyncStorage from '@react-native-community/async-storage';

import Catalogs from "./catalog/catalog";


import * as appStyles from './styles/body.style';
import * as storageConstants from '../constants/storage.Constants';

export default function Home() {
	const [favoriteBoards, SetFavoriteBoards] = useState([]);
	const [appLoading, setAppLoading] = useState(true);

	useEffect(() => {
		// async storage favorite boards
		// fetch first board in array or HOME board
		if (favoriteBoards !== null && favoriteBoards.length === 0) {
      		retreiveFavoriteBoards();
    	}

    return () => {};
	}, [favoriteBoards.length]);
	
	const retreiveFavoriteBoards = () => {
		AsyncStorage.getItem(storageConstants.FAVORITE_BOARDS)
			.then((data) => {
				if (data !== null) {
					SetFavoriteBoards(data);
				} else {
					SetFavoriteBoards(storageConstants.DEFAULT_BOARDS);
				}
		})
		.catch((err) => {
			console.error("Error retrieving favorite boards from storage", err);

			ToastAndroid.show(
			"Error retrieving favorite boards from storage",
			ToastAndroid.SHORT
			);
		})
		.finally(() => {
			setAppLoading(false);
		});
	}

	return (
	<View style={styles.container}>
		{appLoading ? (
			<ActivityIndicator></ActivityIndicator>
		) : (
			<View style={styles.container}>
			<Catalogs favoriteBoards={favoriteBoards}></Catalogs>
			</View>
						)}
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