import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
} from "react-native";

import * as appStyles from "../styles/body.style";
import Boards from "./boards";
import Search from "../common/search";

import { debounce } from "lodash";
// TODO: make sure that im using just debounce and not whole library

export default function BoardManagement() {
	const [favoriteBoards, setFavoriteBoards] = useState([]);
	const [boards, setBoards] = useState([]);
	const [filteredBoards, setFilteredBoards] = useState([]);
	const [appLoading, setAppLoading] = useState(true);
	const [promiseError, setPromiseError] = useState(false);
	const [search, setSearch] = useState("");

	useEffect(() => {
	
		if (boards.length === 0) {
			getAllBoards();
		}
		
		if (search.length > 0) {
			
			setFilteredBoards(boards.filter((item) => {
				if(!item) return false
				if (
          item.title.toLower().includes(search) ||
          item.board.toLower().includes(search)
        ) {
          return item;
        }
      		}))
		}

    return () => {};
  }, [favoriteBoards.length, search.length]);

  // get boards
  const getAllBoards = () => {
    fetch("https://a.4cdn.org/boards.json")
      .then((response) => response.json())
      .then((data) => {
		setBoards(data.boards);
        setFilteredBoards(data.boards);
      })
      .catch((err) => {
        setPromiseError(true);
        console.error("error retrieving boards", err);
      })
      .finally(() => {
		  setAppLoading(false);
      });
	};
	
	const onSearchChange = (text) => {
		setSearch(text);
	}

  return (
    <View style={styles.container}>
      {appLoading ? (
        <ActivityIndicator></ActivityIndicator>
      ) : (
        <View style={styles.container}>
          <Search searchValue={search} onChange={onSearchChange}></Search>
          <Boards boards={filteredBoards}></Boards>
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