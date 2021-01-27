import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import Catalog from './catalog/catalog';

export default function Home() {
	const [boards, setBoards] = useState([]);
	const [appLoading, setAppLoading] = useState(true);

	useEffect(() => {

		fetch("https://a.4cdn.org/boards.json")
      .then((response) => response.json())
      .then((data) => {
        setBoards(data.boards);
      })
      .catch((err) => {
        console.error("error retrieving boards", err);
      })
      .finally(() => {
        setAppLoading(false);
      });

		return (() => {

		})
	}, [])
	// get catalog
	// if favorites exist then show favorites, else show default

	return (
		<View style={styles.container}>
			{appLoading ? (
			<ActivityIndicator></ActivityIndicator>
			) : (
			<Catalog boards={boards}></Catalog>
			)}
		</View>
  );
}

// manage boards
// get/list favorited boards
// 

const styles = StyleSheet.create({
	container: {
	  color: 'white',
	backgroundColor: 'gray',
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});