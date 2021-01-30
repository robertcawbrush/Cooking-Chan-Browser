import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import * as appStyles from '../styles/body.style';

export default function Search(props) {

	return (
    <View style={styles.searchContainer}>
      <Text style={styles.textColor}>Search</Text>
      <View style={styles.searchLayout}>
        <TextInput
          name="search"
          value={props.searchValue}
          onChangeText={props.onChange}
          style={styles.searchField}
        />
        <TouchableOpacity onPress={props.clearSearch} style={styles.button}>
			<Text>Clear</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textColor: {
    color: appStyles.primaryFontColor,
  },
  searchField: {
    backgroundColor: appStyles.SurfaceColor,
	  color: appStyles.primaryFontColor,
	flex: 10,
    padding: 10,
  },
  searchContainer: {
    borderBottomColor: appStyles.OverlayColorLight,
    borderBottomWidth: 2,
    borderStyle: "solid",
  },
  searchLayout: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
	button: {
	flex: 2,
	backgroundColor: appStyles.WarningColor,
	justifyContent: 'center',
	alignItems: 'center'
  }
});