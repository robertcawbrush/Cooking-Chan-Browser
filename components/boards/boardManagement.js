import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
} from "react-native";

import * as appStyles from "../styles/body.style";
import Boards from "./boards";

export default function BoardManagement() {
	const [favoriteBoards, setFavoriteBoards] = useState([]);
  const [boards, setBoards] = useState([]);
  const [appLoading, setAppLoading] = useState(true);
  const [promiseError, setPromiseError] = useState(false);

  useEffect(() => {

    getAllBoards();

    return () => {};
  }, [favoriteBoards]);

  // get boards
  const getAllBoards = () => {
    fetch("https://a.4cdn.org/boards.json")
      .then((response) => response.json())
      .then((data) => {
        setBoards(data.boards);
      })
      .catch((err) => {
        setPromiseError(true);
        console.error("error retrieving boards", err);
      })
      .finally(() => {
        setAppLoading(false);
      });
  };

  return (
    <View style={styles.container}>
      {appLoading ? (
        <ActivityIndicator></ActivityIndicator>
      ) : (
        <Boards boards={boards}></Boards>
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
	backgroundColor: appStyles.primaryColor,
	color: 'white'
  },
});