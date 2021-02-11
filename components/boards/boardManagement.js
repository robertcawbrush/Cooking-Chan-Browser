import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  ActivityIndicator,
  ToastAndroid,
} from "react-native";
import AsyncStorage from "@react-native-community/async-storage";

import * as appStyles from "../styles/body.style";
import Boards from "./boards";
import Search from "../common/search";
import * as storageConstants from '../../constants/storage.Constants';

export default function BoardManagement() {
	const [favoriteBoards, setFavoriteBoards] = useState([]);
	const [boards, setBoards] = useState([]);
	const [filteredBoards, setFilteredBoards] = useState([]);
	const [appLoading, setAppLoading] = useState(true);
	const [search, setSearch] = useState("");

	useEffect(() => {
	
		if (boards.length === 0) {
			const promises = [getAllBoards(), getStoredFavoritedBoards()];
			Promise.all(promises)
				.catch((err) => {
					console.error(err);
					ToastAndroid.show(
						"Error retrieving favorite boards",
						ToastAndroid.SHORT
					);
				})
				.finally(() => {
					setAppLoading(false);
				});
		}

		if (search.length === 0) {
			if (boards.length !== filteredBoards.length) {
				setFilteredBoards(boards);
			}
		} else if (search.length > 0) { 
			searchBoards();
		}

		return (() => {
			AsyncStorage.setItem(
				storageConstants.FAVORITE_BOARDS,
				JSON.stringify(favoriteBoards)
      )
				.then((data) => {
          if (data !== null) setFavoriteBoards(data);
        })
        .catch((err) => {
          ToastAndroid.show(
            "Error retrieving favorite boards from storage",
            ToastAndroid.SHORT,
            ToastAndroid.TOP
          );
        });
		})
  }, [favoriteBoards.size, search.length]);

	const getAllBoards = () => {
		setAppLoading(true);
		
		return fetch("https://a.4cdn.org/boards.json")
		.then((response) => response.json())
			.then(data => {
				setBoards(data.boards);
				setFilteredBoards(data.boards);
		});
	}

	const getStoredFavoritedBoards = () => {
		return AsyncStorage.getItem(storageConstants.FAVORITE_BOARDS)
			.then((data) => {
				if (data !== null) {
					setFavoriteBoards(data);
        		}
      		}
    );
	}
	
	const onSearchChange = (text) => {
		setSearch(text);
	}

	const clearSearch = () => {
		setSearch("");
	}

	const searchBoards = () => {
		const term = search.toLowerCase();

		setFilteredBoards(boards.filter((item) => {
			if(!item) return false
			if (
				item.title.toLowerCase().includes(term) ||
				item.board.toLowerCase().includes(term)
      		) {
        		return item;
      		}
		}))
	}

	const favoriteBoard = (item) => {
		if (!favoriteBoards.includes(item)) {
			setFavoriteBoards(favoriteBoards.concat(item));
		}
	}

	//TODO: Toggle favorites button?
  return (
    <View style={styles.container}>
      {appLoading ? (
        <ActivityIndicator></ActivityIndicator>
      ) : (
        <View style={styles.container}>
          <Search
            searchValue={search}
            onChange={onSearchChange}
            clearSearch={clearSearch}
          ></Search>
          <Boards
            boards={filteredBoards}
            favoriteBoard={favoriteBoard}
          ></Boards>
        </View>
      )}
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
    color: appStyles.primaryFontColor,
	},
});