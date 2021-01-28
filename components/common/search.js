import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import * as appStyles from '../styles/body.style';

export default function Search(props) {

	return (
    <View style={styles.searchContainer}>
      <Text style={styles.searchlabel}>Search</Text>
      <TextInput
        name="search"
        value={props.searchValue}
        onChangeText={props.onChange}
        style={styles.searchField}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  searchlabel: {
    color: appStyles.primaryFontColor,
  },
  searchField: {
    backgroundColor: appStyles.SurfaceColor,
    color: appStyles.primaryFontColor,
    padding: 10,
  },
  searchContainer: {
    borderBottomColor: appStyles.OverlayColorLight,
    borderBottomWidth: 2,
    borderStyle: "solid",
  },
});