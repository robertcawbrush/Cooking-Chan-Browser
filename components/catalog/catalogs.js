import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Catalog from './catalog';
import * as urlConstants from '../../constants/urlConstants';

import CurrentBoardContext from "./common/commonContext";


export default function Catalogs(props) {

	const [catalogs, setCatalogs] = useState([]);
	const [currentCatalog, setCurrentCatalog] = useState(null);

	useEffect(() => {
    if (!currentCatalog) {
      setCurrentCatalog(props.catalogs[0]);
    }
  }, [currentCatalog]);

	const getCatalogs = (url) => {

		fetch(url)
			.then(res => res.json())
			.then(data => {

			}).catch(err => {

			});
	}

	return (
		<View style={styles.container}>
        <CurrentBoardContext.Provider value={currentCatalog}>
				<Catalog data={data}></Catalog>
		</CurrentBoardContext.Provider>
    </View>
  );
}

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

// TODO: ask save image to directory or default